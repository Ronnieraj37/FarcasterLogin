"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Frame from "../frame";

const EmbedImg = ({ embedUrl }: any) => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [isImage, setisImage] = useState<boolean>(false);
  const fetchProperties = async () => {
    const isImgUrl = async (url: any) => {
      try {
        const res = await fetch(url);
        const buff = await res.blob();
        return buff.type.startsWith("image/");
      } catch (error) {
        return false;
      }
    };
    const isImage = await isImgUrl(embedUrl);
    if (isImage) {
      setisImage(true);
    } else {
      setisImage(false);
    }
    setisLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, [embedUrl]);
  if (isLoading) return <p className="h-56">Image Loading...</p>;
  if (isImage) return <img className="max-h-56" src={embedUrl} alt="img.." />;
  return <Frame url={embedUrl} />;
};

export default EmbedImg;
