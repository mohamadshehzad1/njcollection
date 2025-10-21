import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
  {
    section: "About Us",
    items: [
      {
        question: "What is NJ Collection?",
        answer:
          "NJ Collection is a clothing brand rooted in Pakistani craftsmanship, offering curated ensembles combining traditional design with modern aesthetics.",
      },
      {
        question: "When was NJ Collection founded?",
        answer:
          "The brand was founded in 2012, growing its reputation through timeless silhouettes and detailed hand work.",
      },
    ],
  },
  {
    section: "Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept payments via Credit Card, Debit Card, and COD (Cash on Delivery) depending on your location.",
      },
      {
        question: "Is my payment secure?",
        answer:
          "Yes — all transactions are encrypted with SSL and handled through trusted payment gateways to protect your data.",
      },
    ],
  },
  {
    section: "Account & Orders",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Click on “My Account” in the menu and register using your email. You can then manage orders and details from there.",
      },
      {
        question: "Can I cancel or amend my order?",
        answer:
          "Orders can be canceled within 24 hours (excluding unstitched articles). After that time, cancellation or modification may not be allowed.",
      },
      {
        question: "How do I place an order?",
        answer:
          "Browse the store, add items to cart, go to checkout, fill in address & payment details, and confirm. You’ll receive a confirmation email.",
      },
    ],
  },
  {
    section: "Shipping & Delivery",
    items: [
      {
        question: "When will my order be processed?",
        answer:
          "Orders are processed within 3-5 working days after dispatch, not counting the order time. A confirmation is emailed 24 hours before dispatch.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery takes 10-15 working days depending on your location.",
      },
    ],
  },
];

const FAQ = () => {
  // track which answers are open
  const [openState, setOpenState] = useState(
    faqsData.map(() => false)
  );

  const toggleItem = (sectionIndex, itemIndex) => {
    const newState = [...openState];
    newState[sectionIndex] = newState[sectionIndex] === itemIndex
      ? -1
      : itemIndex;
    setOpenState(newState);
  };

  return (
    <>
      <Header />

      <section className="w-full bg-[#f7f5f2] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h1>

          {faqsData.map((section, secIdx) => (
            <div key={secIdx} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {section.section}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, idx) => {
                  const isOpen = openState[secIdx] === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-300 bg-white rounded-lg"
                    >
                      <button
                        onClick={() => toggleItem(secIdx, idx)}
                        className="w-full flex justify-between items-center px-4 py-3 focus:outline-none"
                      >
                        <span className="text-gray-800 font-medium">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="text-gray-500" />
                        ) : (
                          <FaChevronDown className="text-gray-500" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;
