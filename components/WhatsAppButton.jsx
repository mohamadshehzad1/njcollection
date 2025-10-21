import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923369766237"; // Replace with your actual number
  const message = "Hello! I would like to know more about your collection.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
      {/* Optional: Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:opacity-100"></span>
    </a>
  );
};

export default WhatsAppButton;