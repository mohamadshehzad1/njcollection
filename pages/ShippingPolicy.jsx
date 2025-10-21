import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShippingPolicy = () => {
  return (
    <>
      <Header />

      <section className="w-full bg-[#f7f5f2] py-20 flex justify-center items-start min-h-screen">
        <div className="bg-white max-w-4xl w-full mx-6 md:mx-10 lg:mx-0 rounded-xl shadow-sm p-8 md:p-12 lg:p-16 leading-relaxed">
          <h1 className="text-center text-3xl md:text-4xl font-serif text-gray-900 border-b border-gray-300 pb-4 mb-10">
            Shipping Policy
          </h1>

          <p className="text-gray-700 mb-6 text-justify">
            All Orders will be delivered using the service as detailed at the time
            of ordering. <span className="font-semibold">NJ Collection</span> has
            the right to fluctuate any prices in proportion with its costs for
            shipping, but the cost of delivery will always be notified to you
            prior to completion of your order.
          </p>

          <h2 className="text-xl md:text-2xl font-serif text-gray-900 mt-10 mb-4">
            Customer Notice Regarding Delivery Times
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            Please be reminded that deliveries are{" "}
            <span className="font-semibold">3-5 working days</span> after dispatch
            and not from the time of order. Shipping confirmation emails are sent
            24 hours before dispatch. If you have any queries regarding your order,
            please contact us and we will be happy to look into this for you. We
            give all order-related questions high priority. Thank you.
          </p>

          <div className="bg-[#f3ede8] border-l-4 border-[#b89f7a] px-5 py-3 rounded-md mb-8">
            <p className="text-gray-800">
              <strong>Note:</strong> Delivery is between{" "}
              <strong>10-15 working days</strong> depending on the location.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-serif text-gray-900 mt-10 mb-4">
            Delivery Charges
          </h2>
          <p className="text-gray-700 text-justify">
            Delivery charges may vary depending on the type of products ordered
            and the location you select and cannot be refunded. We take no
            responsibility if there are any additional charges in terms of
            customs or duties charged by local authorities / Governments (Out of
            Pakistan). The custom charges have to be borne by the customer.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ShippingPolicy;
