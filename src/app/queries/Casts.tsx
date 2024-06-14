/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { init, useQuery } from "@airstack/airstack-react";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string);
const Casts = ({ fid }: any) => {
  const query = `query MyQuery {
    FarcasterCasts(input: {filter: {castedBy: {_eq: "fc_fid:${fid.fid}"}}, blockchain: ALL}) {
    Cast {
      url
    }
  }
}`;
  const { data, loading } = useQuery(query);
  if (loading || data == null) return <p>Loading....</p>;
  return <div>Casts</div>;
};

export default Casts;
