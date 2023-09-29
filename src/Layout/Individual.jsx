
const Individual = () => {
  return (
    <>
      <div className="p-11 pb-11">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-7xl break-words font-black">
            MUSIC <span className="text-[#950101]">VIDEOS</span>
          </h1>
        </div>
        <div className="pt-9 grid grid-rows-2 grid-flow-col gap-5" id="musicvideo">
          <div className="iframes">
            <iframe
              className="w-full h-auto rounded-md"
              src="https://www.youtube.com/embed/pyf8cbqyfPs?si=ujfMh4vaFwHS0N50"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="iframes">
            <iframe
              className="w-full h-auto rounded-md"
              src="https://www.youtube.com/embed/dZs_cLHfnNA?si=PLOJXdVOdwaVwE6G"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
           
          </div>
           <div>
              <iframe  className="w-full h-auto rounded-md" src="https://www.youtube.com/embed/vMddOrUGwDw?si=agqow3HGBLmHIzw6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <iframe  className="w-full h-auto rounded-md" src="https://www.youtube.com/embed/4vbDFu0PUew?si=6wgU7oxDcAP1sIih" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <iframe className="w-full h-auto rounded-md" src="https://www.youtube.com/embed/Ccz123Jlflc?si=iRObGa3SslDimq4I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;
