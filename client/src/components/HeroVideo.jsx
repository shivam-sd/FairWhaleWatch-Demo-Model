import React from "react";

const HeroVideo = () => {
  return (
    <div className="w-full h-auto py-4 flex items-center justify-center">
      <video
        src="a6ae93fbe9fa49ceb987b081139b6f2b.mp4"
        loop
        muted
        autoPlay
        playsInline
        className="w-full max-w-full h-[70vh] md:h-[70vh] object-cover shadow-lg"
      />
    </div>
  );
};

export default HeroVideo;
