package org.ledgerapi;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import org.hyperledger.fabric.contract.ContractRuntimeException;
import org.json.JSONPropertyIgnore;

public class State {

    String type;
    String[] keyParts;

    String[] primaryKey;
    List<Field> fields = new ArrayList<Field>();

    public State(Class<?> clz, String[] keyParts) {
        try {
            this.type = clz.getSimpleName();
            this.keyParts = keyParts;
            for (String key : keyParts) {
                Field f = clz.getDeclaredField(key);
                f.setAccessible(true);
                fields.add(f);
            }
        } catch (NoSuchFieldException | SecurityException e) {
            throw new ContractRuntimeException(e);
        }

    }

    @JSONPropertyIgnore()
    public String getType() {
        return this.type;
    }

    public static String[] splitKey(String key) {
        return key.split(":");
    }

    // Get the values of the key for the state in order
    @JSONPropertyIgnore()
    public String[] getSplitKey() {
        try {
            List<String> keys = new ArrayList<String>();
            for (Field f : fields) {
                keys.add((String) f.get(this));
            }
            return keys.toArray(new String[] {});
        } catch (IllegalArgumentException | IllegalAccessException e) {
            throw new ContractRuntimeException(e);
        }
    }
}