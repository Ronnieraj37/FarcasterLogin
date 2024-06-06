import { useEffect, useState } from "react";

const EmbedImg = ({ embedUrl }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImgUrlValid, setIsImgUrlValid] = useState(false);

  useEffect(() => {
    const isImgUrl = async (url: any) => {
      return fetch(url, { method: "HEAD" }).then((res) => {
        return res.headers.get("Content-Type")!.startsWith("image");
      });
    };

    (async () => {
      if (embedUrl && (await isImgUrl(embedUrl))) {
        setIsImgUrlValid(true);
      }
      setIsLoading(false);
    })();
  }, [embedUrl]);

  if (isLoading) return <div>Loading...</div>;

  if (!isImgUrlValid) return <div>Invalid Image url...</div>;

  return <img className="h-56" src={embedUrl} alt="img..." />;
};

export default EmbedImg;
