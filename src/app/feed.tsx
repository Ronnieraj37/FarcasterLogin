/* eslint-disable @next/next/no-img-element */
import React from "react";
import { init, useQuery } from "@airstack/airstack-react";
import Frame from "./frame";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string);

const query = `query MyQuery {
  TrendingCasts(
    input: {timeFrame: one_hour, blockchain: ALL, criteria: likes, limit: 10}
  ) {
    TrendingCast {
      fid
      cast {
        text
        embeds
        castedBy {
          profileDisplayName
          profileImage
          profileName
        }
      }
    }
  }
}`;

const Feed = () => {
  const { data } = useQuery(query);
  if (data) {
    const casts = data.TrendingCasts.TrendingCast;
    return (
      <div className="flex flex-col text-black items-center justify-center p-3 ">
        {casts.map((castObj: any, key: number) => {
          return (
            <div
              key={key}
              className="flex my-2 flex-col items-start justify-start p-2 border-[1px] rounded-xl border-black w-[80%]"
            >
              <div className="flex p-1 items-center justify-center">
                <img
                  className="rounded-full h-12 mx-1"
                  alt=".."
                  src={castObj.cast.castedBy.profileImage}
                />
                <div className="p-1 mx-1">
                  <p className="text-lg font-serif">
                    {castObj.cast.castedBy.profileDisplayName}
                  </p>
                  <p className="text-sm font-medium">
                    @{castObj.cast.castedBy.profileName}
                  </p>
                </div>
              </div>
              <p className=" flex p-2">{castObj.cast.text}</p>
              <div className="h-64 p-2 flex w-full justify-around items-center ">
                {castObj.cast.embeds.map(async (embed: any, i: number) => {
                  async function checkImage(url: string) {
                    const res = await fetch(url);
                    const buff = await res.blob();
                    console.log(
                      embed.url,
                      "is image : ",
                      buff.type.startsWith("image/")
                    );
                    return buff.type.startsWith("image/");
                  }
                  if (await checkImage(embed.url)) {
                    return (
                      <img
                        key={i}
                        className="h-56 "
                        src={embed.url}
                        alt="img..."
                      />
                    );
                  }
                  return <></>;
                  // <Frame key={i} url={embed.url} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Feed;
