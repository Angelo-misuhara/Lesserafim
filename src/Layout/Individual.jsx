import { useRef, useState } from "react";

const Individual = () => {
  return (
    <>
      <div className="p-11">
        <div className="flex flex-row justify-center items-center border">
          <h1 className="text-7xl break-words font-black">
            MUSIC <span className="text-[#950101]">VIDEOS</span>
          </h1>
        </div>
        <div className="pt-9 flex flex-row gap-5 justify-center items-center" id="musicvideo">
          <div className="iframes">
            <iframe
              className="w-full h-auto"
              src="https://www.youtube.com/embed/pyf8cbqyfPs?si=ujfMh4vaFwHS0N50"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="iframes">
            <iframe
              className="w-full h-auto"
              src="https://www.youtube.com/embed/dZs_cLHfnNA?si=PLOJXdVOdwaVwE6G"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;
