import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          The Company may amend this Agreement and/or the Privacy Policy at any
          time by posting a revised version on the Site. The revised version
          will be effective at the time we post it on the Site, and in the event
          you continue to use our Site, you are impliedly agreeing to the
          revised <strong>Terms and Conditions</strong> and{" "}
          <strong>Privacy Policy</strong> expressed herein.
        </p>

        <p className="text-gray-600 mb-6">
          Please read these terms and conditions carefully. These terms &
          conditions, as modified or amended from time to time, are a binding
          contract between the Company and you. If you visit, use, or shop at
          the Site (or any future site operated by the Company), you accept
          these terms and conditions.
        </p>

        <p className="text-gray-600 mb-6">
          In addition, when you use any current or future services of the
          Company or visit or purchase from any business affiliated with the
          Company or third-party vendors, whether or not included in the Site,
          you will also be subject to the guidelines and conditions applicable
          to such service or merchant. If these conditions are inconsistent with
          such guidelines and conditions, such guidelines and conditions will
          prevail.
        </p>

        <p className="text-gray-600 mb-6">
          If these Terms and Conditions conflict with any other document, the
          Terms and Conditions will prevail for the purposes of usage of the
          Site. As a condition of purchase, the Site requires your permission to
          send you administrative and promotional emails. We will send you
          information regarding your account activity and purchases, as well as
          updates about our products and promotional offers. Please see our{" "}
          <a
            href="/privacy"
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
          >
            Privacy Policy
          </a>{" "}
          for details.
        </p>

        <p className="text-gray-600 mb-6">
          We shall have no responsibility in any manner whatsoever regarding any
          promotional emails or messages sent to you. The offers made in those
          promotional emails or messages shall be subject to change at the sole
          discretion of the Company, and the Company owes no responsibility to
          provide you any information regarding such change. By placing an
          order, you make an offer to us to purchase products you have selected
          based on standard site restrictions, merchant-specific restrictions,
          and on the terms and conditions stated below.
        </p>

        <div className="text-sm text-gray-500 text-center mt-10 border-t pt-4">
          <p>© {new Date().getFullYear()} NJ Collection. All Rights Reserved.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsConditions;
