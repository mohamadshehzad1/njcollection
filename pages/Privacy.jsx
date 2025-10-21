import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <>      
    <Header />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          We adhere to a strict confidentiality protocol for order and shipping
          procedures, ensuring that your personal data is used exclusively for a
          secure and efficient transaction process. All personal information is
          treated with the highest level of confidentiality.
        </p>

        <p className="text-gray-600 mb-6">
          The company will not be held responsible for any unforeseen failure or
          delay in the performance of its obligations under this Agreement, when
          such events arise from circumstances beyond its reasonable control,
          including but not limited to acts of God.
        </p>

        <p className="text-gray-600 mb-6">
          Please be assured that your personal information is kept private and
          confidential, and at no point will we share it with a third party
          without your consent.
        </p>

        <p className="text-gray-600 mb-6">
          NJ Collection is focused on ensuring that your privacy is protected
          while you are using our services. This website is operated by{" "}
          <span className="font-medium">www.njcollection.com.pk</span> and this
          privacy policy applies to your use of any of NJ Collection’s websites
          using the domain njcollection.com.pk.
        </p>

        <p className="text-gray-600 mb-6">
          We therefore have a policy explaining what personal information is,
          how the information is being used, who has access to the data, and
          your rights regarding the information collected. By visiting{" "}
          <span className="font-medium">www.njcollection.com.pk</span> you are
          consenting and accepting the practices described in our Privacy
          Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-6">
          This policy covers how we use your personal information. We take your
          privacy seriously and will take all measures to protect your personal
          information. Any personal information received will only be used to
          fulfill your order and may be used for internal analytical purposes.
          We will not sell or redistribute your information to anyone.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Intellectual Property
        </h2>
        <p className="text-gray-600 mb-6">
          You acknowledge and agree that all copyright, software, designs,
          trademarks and other intellectual property and material rights
          relating to our products and this website shall remain at all times
          our property. All such intellectual property is protected by law. This
          intellectual property and content herein contained may be accessed by
          you for non-commercial purposes only. You are not permitted to copy,
          modify, publish, transfer, create from, or commercially exploit, in
          whole or in part, any software, products, or services detailed herein.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consent</h2>
        <p className="text-gray-600 mb-6">
          By using our website, you hereby consent to our Privacy Policy and
          agree to the terms and conditions set out herein.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes</h2>
        <p className="text-gray-600 mb-6">
          We may amend or modify the products detailed, contents and/or the
          terms and conditions of this website and your access and use thereof
          as may be necessary from time to time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
        <p className="text-gray-600 mb-6">
          We have made and continue to make every effort to ensure that this
          website is free from viruses or defects. However, we cannot guarantee
          that your use of this website or any websites accessible through it
          won’t cause damage to your computer. It is your responsibility to
          ensure that the right equipment is available to use the website and
          screen out anything that may damage it. We shall not be liable to any
          person for any loss or damage which may arise to computer equipment as
          a result of using this website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Any Queries</h2>
        <p className="text-gray-600 mb-2">
          For further information or queries, please contact:
        </p>
        <p className="text-gray-700 font-medium">
          Email:{" "}
          <a
            href="mailto:info@njcollection.com.pk"
            className="text-blue-600 hover:underline"
          >
            info@njcollection.com.pk
          </a>
        </p>
        <p className="text-gray-700 font-medium">
          Phone:{" "}
          <a
            href="tel:+923369766237"
            className="text-blue-600 hover:underline"
          >
            +92-336-9766237
          </a>
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

export default Privacy;
