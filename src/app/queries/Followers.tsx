/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { init, useQuery } from "@airstack/airstack-react";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string);
const Followers = ({ fid }: any) => {
  const query = `query MyQuery {
  Socials(
    input: {filter: {dappName: {_eq: farcaster}, identity: {_eq: "fc_fid:${fid.fid}"}}, blockchain: ethereum}
  ) {
    Social {
      followingCount
      followings(input: {limit: 50}) {
        Following {
          followerProfileId
          followerAddress {
            socials {
              profileName
              profileImage
              profileBio
              profileDisplayName
            }
          }
        }
      }
    }
  }
}`;
  const { data, loading } = useQuery(query);
  if (loading || data == null) return <p>Loading....</p>;
  return <div>Followers</div>;
};

export default Followers;
