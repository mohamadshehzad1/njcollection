'use client';
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyAccount = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Save data to localStorage
  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("✅ Account details saved locally!");
  };

  // Logout (clear local data)
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser({ name: "", email: "", phone: "", address: "" });
    alert("👋 Logged out successfully!");
  };

  return (

     <> 
    <Header />
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          My Account
        </h1>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Address
              </label>
              <textarea
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                rows="3"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-gray-900 text-white font-semibold py-2 rounded-xl hover:bg-gray-800 transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-xl hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 text-center mt-6">
          This is a frontend-only version. Your data is saved locally in your browser.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MyAccount;
