"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing after load
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={videoRef} className="relative w-full mt-20">
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {isVisible ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/assets/video/njcollection.webm" type="video/webm" />
            <source src="/assets/video/njcollection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Low-quality fallback while waiting to load
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}

        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  );
};

export default VideoSection;
