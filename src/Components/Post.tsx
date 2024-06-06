import EmbedImg from "./EmbedImg";

const Post = ({ castObj }: any) => {
  return (
    <div className="h-64 p-2 flex w-full justify-around items-center ">
      {castObj.cast.embeds.map((embed: any, i: number) => {
        return <EmbedImg key={i} embedUrl={embed?.url} />;
      })}
    </div>
  );
};

export default Post;
