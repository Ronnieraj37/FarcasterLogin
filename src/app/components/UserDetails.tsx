import React from "react";
import { init, useQuery } from "@airstack/airstack-react";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string);
const UserDetails = (fid: any) => {
  const query = ` query MyQuery {
  Socials(
    input: {
      filter: { dappName: { _eq: farcaster }, identity: { _eq: "fc_fid:${fid.fid}" } }
      blockchain: ethereum
    }
  ) {
    Social {
      id
      chainId
      blockchain
      dappName
      dappSlug
      dappVersion
      userId
      userAddress
      userCreatedAtBlockTimestamp
      userCreatedAtBlockNumber
      userLastUpdatedAtBlockTimestamp
      userLastUpdatedAtBlockNumber
      userHomeURL
      userRecoveryAddress
      userAssociatedAddresses
      profileBio
      profileDisplayName
      profileImage
      profileUrl
      profileName
      profileTokenId
      profileTokenAddress
      profileCreatedAtBlockTimestamp
      profileCreatedAtBlockNumber
      profileLastUpdatedAtBlockTimestamp
      profileLastUpdatedAtBlockNumber
      profileTokenUri
      isDefault
      identity
      fnames
      isFarcasterPowerUser
    }
  }
}`;
  const { data, loading } = useQuery(query);
  if (loading) return <p>Loading....</p>;

  console.log("user Data", data);
  return <div>Showing data</div>;
};

export default UserDetails;
