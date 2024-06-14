/* eslint-disable @next/next/no-img-element */
import React from "react";
import { init, useQuery } from "@airstack/airstack-react";
import Link from "next/link";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string);
const UserDetails = (fid: any) => {
  const query = `query MyQuery {
  Socials(
    input: {filter: {dappName: {_eq: farcaster}, identity: {_eq: "fc_fid:${fid.fid}"}}, 
    blockchain: ethereum}
  ) {
    Social {
      id
      chainId
      blockchain
      dappName
      userId
      userAddress
      profileBio
      profileDisplayName
      profileImage
      profileUrl
      profileName
      profileTokenAddress
      profileTokenUri
      isDefault
      identity
      fnames
      isFarcasterPowerUser
      coverImageURI
      followerCount
      followingCount
    }
  }
    FarcasterCasts(input: {filter: {castedBy: {_eq: "fc_fid:${fid.fid}"}}, blockchain: ALL}) {
    Cast {
      url
    }
  }
}`;
  const { data, loading } = useQuery(query);
  if (loading || data == null) return <p>Loading....</p>;
  const user = data!.Socials.Social[0];

  console.log("user Data", data);
  return (
    <div>
      <img className="max-w-24 rounded" src={user.profileImage} alt="pfp" />
      <p className="text-xl">{user.profileDisplayName}</p>
      <p className="text-lg">@{user.profileName}</p>
      <p>{user.profileBio}</p>
      <p>Followers : {user.followerCount}</p>
      <p>Following : {user.followingCount}</p>
      <Link href={"/casts"}>
        <p>Posts : {data.FarcasterCasts.Cast.length}</p>
      </Link>
    </div>
  );
};

export default UserDetails;

/* 
input :  fid 
output: 

username : profileName
localname : profileDisplayName
bio
profile image
posts
following
followers

 */
