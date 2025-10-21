import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnExchange = () => {
  return (
    <>
      <Header />

      <section className="w-full bg-[#f7f5f2] py-20 flex justify-center items-start min-h-screen">
        <div className="bg-white max-w-4xl w-full mx-6 md:mx-10 lg:mx-0 rounded-xl shadow-sm p-8 md:p-12 lg:p-16 leading-relaxed">
          <h1 className="text-center text-3xl md:text-4xl font-serif text-gray-900 border-b border-gray-300 pb-4 mb-10">
            Return & Exchange Policy
          </h1>

          <p className="text-gray-700 mb-6 text-justify">
            At <span className="font-semibold">NJ Collection</span>, we are
            committed to ensuring the highest level of service. Whilst we hope you
            are delighted with your order, we do not offer any return or exchange
            under any conditions. If you find the product faulty in terms of its
            quality or the work done, you must contact us within{" "}
            <span className="font-semibold">7 days of delivery</span>.
          </p>

          <p className="text-gray-700 mb-6 text-justify">
            After you generate a query, our Quality Department will look into the
            issue and get back to you. After reviewing the product, we may offer
            you an <span className="font-semibold">exchange</span> or{" "}
            <span className="font-semibold">store credit</span> for future
            purchases in case of any major fault. We will not offer any store
            credit for <span className="italic">Unstitched Articles</span>, but we
            may offer you an exchange in case of a major fault.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-6">
            <li>The faulty item must be in its original form.</li>
            <li>
              For exchanges, the client must provide an invoice or email
              confirmation issued by the company.
            </li>
            <li>Shipping fees are non-refundable in case of a return or exchange.</li>
            <li>Order changes can be made within 48 hours (excluding unstitched articles).</li>
            <li>Orders can be cancelled within 24 hours (excluding unstitched articles).</li>
            <li>
              Cancelled orders will be refunded as store credit only (excluding unstitched articles).
            </li>
            <li>
              Alterations are only accepted if reported within one week of
              receiving the outfit (excluding unstitched articles).
            </li>
            <li>
              Orders are not eligible for exchange, refund, or chargeback once processed.
            </li>
            <li>Sale and ready-to-ship articles are not eligible for exchange or return.</li>
            <li>Returns/exchanges are only available through NJ Collection Online Store.</li>
            <li>
              No exchange or return will be accepted based on customer preference or disliking.
            </li>
            <li>
              The company is not responsible for bleeding, print damage, or fading due to washing.
            </li>
            <li>
              Only embroideries mentioned on inlays are included; other accessories are for shoot purposes only.
            </li>
            <li>
              Under COD terms, customers cannot open the package before payment.
            </li>
            <li>No “refund” or “money-back guarantee” is offered on purchased items.</li>
            <li>
              NJ Collection reserves the right to cancel orders due to out-of-stock items, pricing errors, or declined payments.
            </li>
            <li>
              Customs duties (if applicable) are to be borne by the customer during delivery.
            </li>
          </ul>

          <div className="bg-[#f3ede8] border-l-4 border-[#b89f7a] px-5 py-3 rounded-md mt-8">
            <p className="text-gray-800">
              We take pride in the quality of our products and handle each query
              with care. Your satisfaction remains our top priority.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReturnExchange;
