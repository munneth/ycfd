"use client";

import Image from "next/image";
import { useState } from "react";

export default function Donate() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6e] to-[#c41e3a]">
      <main className="flex min-h-screen w-full max-w-md md:max-w-4xl flex-col items-center justify-center py-16 px-8">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="ycfd logo"
          width={200}
          height={200}
          priority
          className="mb-8 rounded-full"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Yuba City Firefighters
        </h1>
        <p className="text-gray-300 text-center mb-8">Local 3793</p>

        {/* Description */}
        <div className="text-gray-300 mb-8 text-base leading-relaxed w-full max-w-md md:max-w-3xl px-4 text-center">
          <p className="mb-4">
            The Yuba City Firefighters Association represents the dedicated men and women of the Yuba City Fire Department, working to protect the community while supporting its members.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-300 hover:text-blue-200 underline text-base font-medium transition-colors mb-4 cursor-pointer block mx-auto"
            type="button"
          >
            {showMore ? "See less..." : "See more..."}
          </button>
          {showMore && (
            <p className="mb-4">
              Founded alongside the department&apos;s long history of service dating back to 1908, the association plays a vital role in advocating for firefighters&apos; professional interests, safety, and training. The Yuba City Fire Department provides fire suppression, emergency medical services, and risk reduction programs to residents of Yuba City and surrounding Sutter County, emphasizing prevention and public education. Through the association, firefighters build strong community ties, participate in charitable events, and collaborate with statewide organizations such as the California Professional Firefighters union, which unites local affiliates across the region, as well as the International Association of Firefighters. The Yuba City Firefighters Association thus serves as both a guardian of public safety and a voice for the firefighters who risk their lives daily, ensuring they have the resources, representation, and community support needed to carry out their mission.
            </p>
          )}
        </div>

        {/* Link Tree */}
        <div className="w-full max-w-md space-y-4">
          {/* Donation Link */}
          <a
            href="https://www.venmo.com/u/YCFD-Local3793"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-[#008CFF] px-6 py-4 text-white font-semibold hover:bg-[#0077D6] transition-colors"
          >
            <span className="text-2xl mr-2">V</span>
            Donate via Venmo
          </a>

          {/* Divider */}
          <div className="my-6 border-t border-gray-600"></div>

          {/* Social Media Links */}
          <a
            href="https://www.facebook.com/YubaCityFireDept/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>

          <a
            href="https://www.instagram.com/yubacityfire/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg bg-pink-600 px-6 py-4 text-white font-semibold hover:bg-pink-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </a>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-8">
          Thank you for supporting your local firefighters
        </p>
      </main>
    </div>
  );
}
