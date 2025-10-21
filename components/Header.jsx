"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaBars, FaTimes, FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔹 Top Bar - Hidden on mobile like Faiza Saqlain */}
      <div className="bg-[#f7f1f0] py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          {/* Left - Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/people/Nazia-Jibran/61577966756419" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="https://www.instagram.com/njcollectionpk/#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
              <FaInstagram size={14} />
            </a>
          </div>
          
          {/* Right - Empty space to balance layout */}
          <div className="w-6"></div>
        </div>
      </div>

      {/* 🔹 Mobile Header Row - Hamburger, Logo, Icons */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        {/* Left - Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black text-xl"
        >
          <FaBars />
        </button>

        {/* Center - Logo */}
        <Link href="/" className="text-xl font-serif font-bold text-black tracking-wider">
          NJ COLLECTION
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-black">
            <FaSearch size={16} />
          </button>
          <Link href="/account" className="text-black">
            <FaUser size={16} />
          </Link>
          <Link href="/cart" className="text-black relative">
            <FaShoppingBag size={16} />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* 🔹 Logo Section - Centered (Desktop only) */}
      <div className="hidden md:flex justify-center items-center py-6 bg-white">
        <Link href="/" className="text-3xl font-serif font-bold text-black tracking-wider">
          NJ COLLECTION
        </Link>
      </div>

      {/* 🔹 Full Width Divider Line */}
      <div className="w-full border-b border-gray-300"></div>

      {/* 🔹 Main Navigation Menu - Desktop only */}
      <nav className="bg-white hidden md:block">
        <div className="max-w-7xl mx-auto">
          <ul className="flex justify-center items-center space-x-8 py-4 text-black font-medium text-sm uppercase tracking-wider">
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                BRIDALS
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                WEDDING
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                FORMALS
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                FSLUXE
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                LUXURY PRET
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                VELVET CLASSICS
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                UNSTITCHED
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                MENSWEAR
              </Link>
            </li>
            <li>
              <Link href="/products/AllProducts" className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black pb-1">
                READY TO SHIP
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🔹 Mobile Menu - Slides from left like Faiza Saqlain */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col py-4 text-black font-medium text-sm uppercase">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  BRIDALS
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  WEDDING
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  FORMALS
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  FSLUXE
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  LUXURY PRET
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  VELVET CLASSICS
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  UNSTITCHED
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  MENSWEAR
                </Link>
              </li>
              <li>
                <Link 
                  href="/products/AllProducts" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                >
                  READY TO SHIP
                </Link>
              </li>
            </ul>

            {/* Additional Links like Faiza Saqlain */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-4 mb-4">
                <a href="https://www.facebook.com/people/Nazia-Jibran/61577966756419" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <FaFacebookF size={18} />
                </a>
                <a href="https://www.instagram.com/njcollectionpk/#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <FaInstagram size={18} />
                </a>
              </div>
              <Link href="/account" className="block py-2 text-gray-600 hover:text-black">
                My Account
              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-black">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Second Full Width Divider Line */}
      <div className="w-full border-b border-gray-300"></div>
    </header>
  );
};

export default Header;