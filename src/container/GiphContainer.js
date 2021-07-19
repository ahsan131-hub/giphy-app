import React, { useReducer } from "react";
import ImageContainer from "./ImageContainer";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const GiphContainer = ({ data, isloaded, mySetIsloaded }) => {
  const chunkSize = 3;
  const arr = data;

  const groups = arr
    .map((e, i) => {
      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });

  useEffect(() => {
    // effect
    return () => {
      console.log("render from Giph");
    };
  }, []);

  return (
    <>
      <div className={"container"}>
        {groups.map((group, index0) => {
          return (
            <div key={index0} className={"row"}>
              {group.map((obj, index) => {
                // console.log(obj[1]);
                return (
                  <ImageContainer
                    key={index}
                    src={obj[1].images.original.url}
                    title={obj[1].title}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GiphContainer;
