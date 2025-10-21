'use client';
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>    
    
    <Header />
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 tracking-tight">
          About Us
        </h1>

        {/* Intro Section */}
        <p className="text-lg leading-relaxed text-center text-gray-700 mb-10">
          <span className="font-semibold text-gray-900">NJ Collection</span>, as a brand,
          embodies a <span className="italic">modern yet timeless essence</span>. It strives to create
          stunning designs that celebrate individuality and showcase exceptional craftsmanship.
        </p>

        {/* Divider */}
        <div className="flex justify-center mb-10">
          <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Brand Story */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            Founded in <span className="font-semibold text-gray-900">2015</span>, NJ Collection
            has become synonymous with elegance, offering a unique blend of contemporary styles
            and intricate detailing.
          </p>

          <p>
            From <span className="italic">luxury prêt-à-porter</span> to bespoke creations, NJ Collection
            is dedicated to curating a wardrobe that reflects sophistication, confidence, and
            timeless beauty.
          </p>
        </div>

        {/* Visual / Quote Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-sm">
          <blockquote className="text-center text-xl italic text-gray-900 font-medium">
            “At NJ Collection, every design is a celebration of artistry, innovation, and enduring style.”
          </blockquote>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
