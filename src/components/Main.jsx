import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import GifCard from "./GifCard";

function Main() {
  const { gifs, search, offset, setOffset, handelGetNextGifs, noMoreGifs } = useContext(Context);

  useEffect(() => {
    handelGetNextGifs();
  }, [offset]);


  const handelScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <main className="max-w-screen-xl flex flex-col items-center justify-evenly lg:flex-row lg:flex-wrap lg:gap-y-14 lg:mt-14 xl:gap-y-24 xl:mt-24 gap-y-4 mt-4 m-auto">
      {gifs && gifs.length > 0 ? (
        gifs.map((gif) => <GifCard gif={gif} key={gif.id} />)
      ) : (
        <h2 className="text-4xl font-bold text-center">
          Looks like there are no gifs for "{search}" 😢
        </h2>
      )}
      {noMoreGifs && (
        <h2 className="text-4xl font-bold text-center">
          There are No more gifs for "{search}" 😢
        </h2>
      )}

    </main>
  );
}

export default Main;
