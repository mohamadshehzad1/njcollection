"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g83j4j7", // your EmailJS Service ID
        "template_dtw1vrb", // your Template ID
        form.current,
        "X8VRXXwzFKP5BbOv1" // your Public Key
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("There was an error sending the message. Please try again later.");
        }
      );
  };

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTACT SECTION */}
      <section className="w-full bg-[#f7f6f3] py-20">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-[38px] font-light tracking-wide text-gray-900">
              Contact Us
            </h1>

            <p className="text-gray-700 leading-relaxed text-[16px] max-w-md">
              Our team would love to hear from you. Reach out for any inquiries,
              appointments, or collaborations.
            </p>

            <div className="space-y-6 text-[15px] text-gray-800">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-600 text-lg" />
                <a
                  href="https://wa.me/923369766237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +92 336 9766237 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-700 text-lg" />
                <a href="tel:+923369766237" className="hover:underline">
                  +92 336 9766237 (Call & Appointments)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-700 text-lg" />
                <a
                  href="mailto:njcollectiopk@gmail.com"
                  className="hover:underline"
                >
                  njcollectiopk@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white shadow-md rounded-xl p-8 md:p-10"
            >
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md tracking-wider text-sm hover:bg-gray-800 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Contact;
