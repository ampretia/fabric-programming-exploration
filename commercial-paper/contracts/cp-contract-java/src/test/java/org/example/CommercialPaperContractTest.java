/*
 * SPDX-License-Identifier: Apache License 2.0
 */

package org.example;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.nio.charset.StandardCharsets;

import org.hyperledger.fabric.shim.ChaincodeStub;

public final class CommercialPaperContractTest {

//    @Nested
    class AssetExists {
//        @Test
        public void noProperAsset() {

            CommercialPaperContract contract = new CommercialPaperContract();
            CommercialPaperContext ctx = mock(CommercialPaperContext.class);
            ChaincodeStub stub = mock(ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            when(stub.getState("10001")).thenReturn(new byte[] {});
            boolean result = contract.commercialPaperExists(ctx, "10001");

            assertFalse(result);
        }

//        @Test
        public void assetExists() {

            CommercialPaperContract contract = new CommercialPaperContract();
            CommercialPaperContext ctx = mock(CommercialPaperContext.class);
            ChaincodeStub stub = mock(ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            when(stub.getState("10001")).thenReturn(new byte[] { 42 });
            boolean result = contract.commercialPaperExists(ctx, "10001");

            assertTrue(result);

        }

//        @Test
        public void noKey() {
            CommercialPaperContract contract = new CommercialPaperContract();
            CommercialPaperContext ctx = mock(CommercialPaperContext.class);
            ChaincodeStub stub = mock(ChaincodeStub.class);
            when(ctx.getStub()).thenReturn(stub);

            when(stub.getState("10002")).thenReturn(null);
            boolean result = contract.commercialPaperExists(ctx, "10002");

            assertFalse(result);

        }

    }

//    @Nested
    class AssetCreates {

//        @Test
        // public void newAssetCreate() {
        //     CommercialPaperContract contract = new CommercialPaperContract();
        //     CommercialPaperContext ctx = mock(CommercialPaperContext.class);
        //     ChaincodeStub stub = mock(ChaincodeStub.class);
        //     when(ctx.getStub()).thenReturn(stub);

        //     String json = "{\"value\":\"TheAsset\"}";

        //     contract.createCommercialPaper(ctx, "10001", "TheAsset");

        //     verify(stub).putState("10001", json.getBytes(UTF_8));
        // }

//        @Test
        // public void alreadyExists() {
        //     CommercialPaperContract contract = new CommercialPaperContract();
        //     CommercialPaperContext ctx = mock(CommercialPaperContext.class);
        //     ChaincodeStub stub = mock(ChaincodeStub.class);
        //     when(ctx.getStub()).thenReturn(stub);

        //     when(stub.getState("10002")).thenReturn(new byte[] { 42 });

        //     Exception thrown = assertThrows(RuntimeException.class, () -> {
        //         contract.createCommercialPaper(ctx, "10002", "TheAsset");
        //     });

        //     assertEquals(thrown.getMessage(), "The asset 10002 already exists");

        // }

    }

//    @Test
    // public void assetRead() {
    //     CommercialPaperContract contract = new CommercialPaperContract();
    //     CommercialPaperContext ctx = mock(CommercialPaperContext.class);
    //     ChaincodeStub stub = mock(ChaincodeStub.class);
    //     when(ctx.getStub()).thenReturn(stub);

    //     CommercialPaper asset = new CommercialPaper();
    //     asset.setValue("Valuable");

    //     String json = "{\"value\":\"Valuable\"}";// asset.toJSONString();
    //     when(stub.getState("10001")).thenReturn(json.getBytes(StandardCharsets.UTF_8));

    //     CommercialPaper returnedAsset = contract.readCommercialPaper(ctx, "10001");
    //     assertEquals(returnedAsset.getValue(), asset.getValue());
    // }

//    @Nested
    class AssetUpdates {
//        @Test
        // public void updateExisting() {
        //     CommercialPaperContract contract = new CommercialPaperContract();
        //     CommercialPaperContext ctx = mock(CommercialPaperContext.class);
        //     ChaincodeStub stub = mock(ChaincodeStub.class);
        //     when(ctx.getStub()).thenReturn(stub);
        //     when(stub.getState("10001")).thenReturn(new byte[] { 42 });

        //     contract.updateCommercialPaper(ctx, "10001", "updates");

        //     String json = "{\"value\":\"updates\"}";
        //     verify(stub).putState("10001", json.getBytes(UTF_8));
        // }

//        @Test
//         public void updateMissing() {
//             CommercialPaperContract contract = new CommercialPaperContract();
//             CommercialPaperContext ctx = mock(CommercialPaperContext.class);
//             ChaincodeStub stub = mock(ChaincodeStub.class);
//             when(ctx.getStub()).thenReturn(stub);

//             when(stub.getState("10001")).thenReturn(null);

//             Exception thrown = assertThrows(RuntimeException.class, () -> {
//                 contract.updateCommercialPaper(ctx, "10001", "TheAsset");
//             });

//             assertEquals(thrown.getMessage(), "The asset 10001 does not exist");
//         }

    }

// //    @Test
//     public void assetDelete() {
//         CommercialPaperContract contract = new CommercialPaperContract();
//         CommercialPaperContext ctx = mock(CommercialPaperContext.class);
//         ChaincodeStub stub = mock(ChaincodeStub.class);
//         when(ctx.getStub()).thenReturn(stub);
//         when(stub.getState("10001")).thenReturn(null);

//         Exception thrown = assertThrows(RuntimeException.class, () -> {
//             contract.deleteCommercialPaper(ctx, "10001");
//         });

//         assertEquals(thrown.getMessage(), "The asset 10001 does not exist");
//     }

}