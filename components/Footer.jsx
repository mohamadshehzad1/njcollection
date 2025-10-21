"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_g83j4j7",
        "template_dtw1vrb",
        templateParams,
        "X8VRXXwzFKP5BbOv1"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Thank you for subscribing!");
          setEmail("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-0 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* --- Column 1: About --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-6 text-gray-600">
            NJ Collection is synonymous with sophistication and elegance.
            Our collections are imbued with a time-honoured aesthetic and
            exquisite craftsmanship that reflect our cultural heritage reimagined
            with modern artistry. Built on creativity and quality, NJ Collection
            has carved a niche for itself in contemporary fashion.
          </p>
        </div>

        {/* --- Column 2: Help --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/FAQs" className="hover:underline">FAQs</Link></li>
            <li><Link href="/ReturnExchange" className="hover:underline">Return & Exchange</Link></li>
            <li><Link href="/ShippingPolicy" className="hover:underline">Shipping Policy</Link></li>
            <li><Link href="/Privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* --- Column 3: Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Account" className="hover:underline">My Account</Link></li>
            <li><Link href="/TermsConditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/creative-director" className="hover:underline">Creative Director</Link></li>
            <li><Link href="/About" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* --- Column 4: Newsletter & Social --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Sign up for exclusive offers, stories, and events.
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>

          {status && (
            <p className="text-sm text-gray-600">{status}</p>
          )}

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/people/Nazia-Jibran/61577966756419"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/njcollectionpk/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Copyright --- */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NJ Collection. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;