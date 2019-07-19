import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.security.cert.CertificateException;

import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;

import com.google.protobuf.InvalidProtocolBufferException;

import org.hyperledger.fabric.protos.msp.Identities.SerializedIdentity;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.json.JSONObject;

public class ClientIdentity {
    protected String mspId;
    protected X509Certificate cert;
    protected Map<String, String> attrs;
    protected String id;

    public ClientIdentity(ChaincodeStub stub) throws InvalidProtocolBufferException, CertificateException, UnsupportedEncodingException {
        final byte[] signingId = stub.getCreator();
    
        SerializedIdentity si = SerializedIdentity.parseFrom(signingId);
        this.mspId = si.getMspid();
        
        final byte[] idBytes = si.getIdBytes().toByteArray();

        final X509Certificate cert = (X509Certificate) CertificateFactory.getInstance("X509").generateCertificate(new ByteArrayInputStream(idBytes));
        this.cert = cert;

        final byte[] extVal = cert.getExtensionValue("1.2.3.4.5.6.7.8.1");

        this.attrs = new HashMap<String, String>();

        if (extVal != null) {
            final String extStr = new String(extVal, "UTF-8");
            final Pattern pattern = Pattern.compile("\\{(.*)");
            final Matcher matcher = pattern.matcher(extStr);

            if (matcher.find()) {
                final String attrJSONString = "{" + matcher.group(1);
                final JSONObject attrJSON = new JSONObject(attrJSONString);

                final JSONObject attrs = attrJSON.getJSONObject("attrs");
    
                Iterator<String> keys = attrs.keys();
    
                Map<String, String> attrMap = new HashMap<String, String>();
    
                while(keys.hasNext()) {
                    String key = keys.next();
                    
                    attrMap.put(key, attrs.getString(key));
                }
    
                this.attrs = attrMap;
            }
        }

        this.id = "x509::" + cert.getSubjectDN().getName() + "::" + cert.getIssuerDN().getName();
    }

    public String getId() {
        return this.id;
    }

    public String getMSPID() {
        return this.mspId;
    }

    public String getAttributeValue(String attrName) {
        if (this.attrs.containsKey(attrName)) {
            return this.attrs.get(attrName);
        }
        return null;
    }

    public boolean assertAttributeValue(String attrName, String attrValue) {
        if (!this.attrs.containsKey(attrName)) {
            return false;
        } else {
            return attrValue.equals(this.attrs.get(attrName));
        }
    }

    public X509Certificate getX509Certificate() {
        return this.cert;
    }
}