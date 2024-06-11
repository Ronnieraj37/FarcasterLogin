// import React from "react";
// import {
//   hexStringToBytes,
//   getSSLHubRpcClient,
//   Metadata,
//   makeCastAdd,
//   FarcasterNetwork,
// } from "@farcaster/hub-nodejs";
// import { config } from "dotenv";
// config();
// const createPost = async () => {
//   //
//   const FC_NETWORK = FarcasterNetwork.MAINNET;
//   const SIGNER_PRIVATE_KEY = "0x..."; // Your signer's private key
//   const FID = 1; // Your fid
//   const ed25519Signer = new NobleEd25519Signer(SIGNER_PRIVATE_KEY);
//   const dataOptions = {
//     fid: FID,
//     network: FC_NETWORK,
//   };

//   const client = getSSLHubRpcClient("hubs-grpc.airstack.xyz");
//   // Construct the cast
//   const cast = await makeCastAdd(
//     {
//       text: "This is a cast!", // Text can be up to 320 bytes long
//       embeds: [],
//       embedsDeprecated: [],
//       mentions: [],
//       mentionsPositions: [],
//     },
//     dataOptions,
//     ed25519Signer
//   );

//   client.$.waitForReady(Date.now() + 5000, async (e) => {
//     if (e) {
//       console.error(`Failed to connect to the gRPC server:`, e);
//       process.exit(1);
//     } else {
//       console.log(`Connected to the gRPC server`);
//       const metadata = new Metadata();
//       // Provide API key here
//       metadata.add("x-airstack-hubs", process.env.AIRSTACK_API_KEY as string);

//       if (cast.isOk()) {
//         // Broadcast the cast/message to the Farcaster network
//         const submitResult = await client.submitMessage(
//           castReplyResult.value,
//           metadata
//         );
//         if (submitResult.isOk()) {
//           console.log(`Reply posted successfully`);
//         } else {
//           console.error(`Error posting reply: ${submitResult.error}`);
//         }
//       } else {
//         const error = cast.error;
//         // Handle the error case
//         console.error(`Error posting reply: ${error}`);
//       }
//       // After everything, close the RPC connection
//       client.close();
//     }
//   });
//   return <div>createPost</div>;
// };

// export default createPost;
