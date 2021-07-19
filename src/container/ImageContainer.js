import React from "react";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const ImageContainer = ({ src, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = () => {
    setIsLoaded(true);
  };
  useEffect(() => {
    return () => {
      setIsLoaded(false);
    };
  }, [src]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: gray;
  `;
  return (
    <div className="col-sm">
      <figure className="fig">
        <img
          src={src}
          height="200"
          width="250"
          style={{
            display: isLoaded ? "inline-block" : "none",
            textAlign: "center",
            position: "relative",
            alignSelf: "center",
          }}
          onLoad={() => {
            loaded();
          }}
        />
        {!isLoaded && <ClipLoader size={150} />}

        <figcaption className="figCap">{title}</figcaption>
      </figure>
    </div>
  );
};

export default ImageContainer;
