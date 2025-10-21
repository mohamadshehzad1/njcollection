"use client";
import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full mt-20">
      {/* --- Video Container --- */}
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/video/njcollection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* --- Subtle Overlay for Professional Look --- */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* --- Optional brand overlay --- */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-4 tracking-wider">
              NJ COLLECTION
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wider">
              Elegance Redefined
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VideoSection;
