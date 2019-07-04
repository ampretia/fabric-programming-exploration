package org.ledgerapi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Function;

import com.google.protobuf.InvalidProtocolBufferException;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.LedgerSerializer;
import org.hyperledger.fabric.protos.ledger.queryresult.KvQueryResult.KV;
import org.hyperledger.fabric.protos.peer.ChaincodeShim.QueryResponse;
import org.hyperledger.fabric.protos.peer.ChaincodeShim.QueryResultBytes;
import org.hyperledger.fabric.shim.ShimSPI;
import org.hyperledger.fabric.shim.impl.KeyValueImpl;
import org.hyperledger.fabric.shim.ledger.CompositeKey;
import org.hyperledger.fabric.shim.ledger.KeyModification;
import org.hyperledger.fabric.shim.ledger.KeyValue;

/**
 * StateList
 *
 */
public class StateList<T extends State> implements Iterable<T> {

    public class StateListIterator<T extends State> implements Iterator<T>, AutoCloseable {
        StateList<T> list;
        private QueryResponse currentQueryResponse;
        ShimSPI spi;
        private Iterator<QueryResultBytes> currentIterator;
        private Function<QueryResultBytes,KeyValue> mapper;

        public StateListIterator(String startKey, String endKey, StateList<T> list) {
            this.list = list;
            this.spi = this.list.ctx.getStub().getSPI();
            this.currentQueryResponse = this.spi.getStateByRange(list.collection, startKey, endKey, null);
            this.currentIterator = currentQueryResponse.getResultsList().iterator();
            mapper = queryResultBytesToKv.andThen(KeyValueImpl::new);
        }

        @Override
        public boolean hasNext() {
            return currentIterator.hasNext() || currentQueryResponse.getHasMore();
        }

        @Override
        public T next() {
            // return next fetched result, if any
            if (currentIterator.hasNext()) {
                KeyValue kv =  mapper.apply(currentIterator.next());
                return list.inflate(kv.getValue());
            }

            // throw exception if there are no morequeryResponses
            if (!currentQueryResponse.getHasMore())  throw new NoSuchElementException();

            // get more results from peer
            currentQueryResponse = spi.queryStateNext(currentQueryResponse.getId());
            currentIterator = currentQueryResponse.getResultsList().iterator();

            // return next fetched result
            KeyValue kv =  mapper.apply(currentIterator.next());
            return list.inflate(kv.getValue());
        }

        @Override
        public void close() throws Exception {
            this.spi.queryStateClose(currentQueryResponse.getId());
            this.currentIterator = Collections.emptyIterator();
            this.currentQueryResponse = QueryResponse.newBuilder().setHasMore(false).build();
        }


        private Function<QueryResultBytes, KV> queryResultBytesToKv = new Function<QueryResultBytes, KV>() {
            @Override
            public KV apply(QueryResultBytes queryResultBytes) {
                try {
                    return KV.parseFrom(queryResultBytes.getResultBytes());
                } catch (InvalidProtocolBufferException e) {
                    throw new RuntimeException(e);
                }
            }

        };
    }

    public static String WORLD_STATE = "";
    private Context ctx;
    private String collection;
    private String generation;
    private String domainhash;
    private Class<T> type;
    private LedgerSerializer serializer;
    private static final String UNSPECIFIED_KEY = new String(Character.toChars(0x000001));
    public static final String MAX_UNICODE_RUNE = "\udbff\udfff";

    /**
     * Store Fabric context for subsequent API access, and name of list
     */
    public StateList(Context ctx, Class<T> type, String collection, String generation, String domainhash) {
        this.ctx = ctx;
        this.collection = collection;
        this.generation = generation;
        this.domainhash = domainhash; // should come from the value of the model
        this.type = type;
        this.serializer = ctx.getLedgerSerializer(type);
    }

    // Basic CRUD style operations

    /**
     * Add a state to the list. Creates a new state in worldstate with appropriate
     * composite key. Note that state defines its own key. State object is
     * serialized before writing.
     */
    public void add(T state) {
        CompositeKey key = this.formKey(state.getSplitKey());
        byte[] data = this.serializer.toBuffer(state);
        System.out.println(new String(data));
        // the two underlying implementations are the same but needs refactory to expose
        if (this.collection.equals("")) {
            this.ctx.getStub().putState(key.toString(), data);
        } else {
            this.ctx.getStub().putPrivateData(this.collection, key.toString(), data);
        }

    }

    /**
     * Get a state from the list using supplied keys. Form composite keys to
     * retrieve state from world state. State data is deserialized into JSON object
     * before being returned.
     */
    public T get(String key) {
        CompositeKey ledgerkey = this.formKey(State.splitKey(key));
        byte[] buffer = null;
        // the two underlying implementations are the same but needs refactory to expose
        if (this.collection.equals("")) {
            buffer = this.ctx.getStub().getState(ledgerkey.toString());
        } else {
            buffer = this.ctx.getStub().getPrivateData(this.collection, ledgerkey.toString());
        }

        T state = null;
        if (buffer != null && buffer.length > 0) {
            state = (T) this.serializer.fromBuffer(buffer);
            System.out.println("State ss " + state.toString());
        } else {
            System.out.println("Buffer was returned that is null");
        }
        return state;
    }

    /**
     * Update a state in the list. Puts the new state in world state with
     * appropriate composite key. Note that state defines its own key. A state is
     * serialized before writing. Logic is very similar to addState() but kept
     * separate becuase it is semantically distinct.
     */
    public void update(T state) {
        CompositeKey ledgerkey = this.formKey(state.getSplitKey());
        byte[] data = this.serializer.toBuffer(state);
        // the two underlying implementations are the same but needs refactory to expose
        if (this.collection.equals("")) {
            this.ctx.getStub().putState(ledgerkey.toString(), data);
        } else {
            this.ctx.getStub().putPrivateData(this.collection, ledgerkey.toString(), data);
        }
    }

    /**
     *
     * @param key
     */
    public void delete(String key) {
        CompositeKey ledgerkey = this.formKey(State.splitKey(key));
        if (this.collection.equals("")) {
            this.ctx.getStub().delState(ledgerkey.toString());
        } else {
            this.ctx.getStub().delPrivateData(this.collection, ledgerkey.toString());
        }
    }

    /**
     * Move to the generation specified
     *
     * @param key
     * @param ageTo
     */
    public void age(String key, String ageTo) {
        throw new RuntimeException("Not implemented");
        // const stateKeys = State.splitKey(key);
        // const ledgerkey = this.formKey(stateKeys);
        // const data = await this.ctx.stub.getPrivateData(this.collection, ledgerkey);

        // const k = this.ctx.stub.createCompositeKey(this.type, [this.domainhash,
        // ageTo, ...stateKeys]);
        // await this.ctx.stub.putPrivateData(this.collection, k, data);

        // await this.ctx.stub.deletePrivateData(this.collection, ledgerkey);
    }

    private CompositeKey formKey(String[] stateKeys) {
        List<String> attributes = new ArrayList<String>(Arrays.asList((stateKeys)));

        attributes.add(0, this.domainhash);
        attributes.add(1, this.generation);
        return new CompositeKey(this.type.getSimpleName(), attributes);
    }

    /**
     * Returns a range of this state list from the start to the end of the list.
     *
     * Note: be careful of large queries with this api
     */
    public Iterator<T> getIterator() {
        String startKey = formKey(new String[]{UNSPECIFIED_KEY}).toString();
        String endKey = formKey(new String[]{UNSPECIFIED_KEY+ MAX_UNICODE_RUNE}).toString();
        return new StateListIterator<>(startKey, endKey, this);
    }

    /**
     * Returns a range of this state list from the start to the end of the list
     */
    public Iterator<T> getIterator(String startKey) {
        String sk = formKey(new String[]{startKey}).toString();
        String endKey = formKey(new String[]{startKey+ MAX_UNICODE_RUNE}).toString();
        return new StateListIterator<>(sk, endKey, this);
    }

    /**
     * Returns a range of this state list from the start to the end key
     */
    public Iterator<T> getIterator(String startKey, String endKey) {
        String sk = formKey(new String[]{startKey}).toString();
        String ek = formKey(new String[]{endKey}).toString();
        return new StateListIterator<>(sk, ek, this);
    }

    /**
     * Returns a history of key values across time.
     * <p>
     * For each historic key update, the historic value and associated transaction
     * id and timestamp are returned. The timestamp is the timestamp provided by the
     * client in the proposal header. This method requires peer configuration
     * <code>core.ledger.history.enableHistoryDatabase</code> to be true.
     *
     * @param key The state variable key
     * @return an {@link Iterable} of {@link KeyModification}
     */
    public Iterator<StateModification<T>> getHistory(String key) {
        throw new RuntimeException("not implemented yet");
    }

    private T inflate(byte[] buffer){
        T state = null;
        if (buffer != null && buffer.length > 0) {
            state = (T) this.serializer.fromBuffer(buffer);
            System.out.println("State ss " + state.toString());
        } else {
            System.out.println("Buffer was returned that is null");
        }
        return state;
    }

    @Override
    public Iterator<T> iterator() {
        // TODO Auto-generated method stub
        return null;
    }

}