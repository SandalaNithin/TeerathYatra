import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function TeerathYatraHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* ✅ Render Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-start h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.templepurohit.com/wp-content/uploads/2015/12/2-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 max-w-2xl px-12">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">
            Temple Teertha Yatra — Discover, Connect, and Journey Within{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Begins Here
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Discover divine destinations, connect with experienced pilgrims,
            and plan your spiritual journey across India's most sacred sites.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
            >
              Start Your Journey
            </button>

            <button className="border border-gray-300 hover:border-orange-400 hover:text-orange-400 px-6 py-3 rounded-lg font-medium transition">
              Explore Sites
            </button>
          </div>
        </div>
      </section>

      {/* Plan Your Perfect Pilgrimage Section */}
      <section className="bg-[#2b211a] text-white py-20 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Join with your family now  Pilgrimage
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Everything you need to make your spiritual journey comfortable,
          meaningful, and memorable
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Smart Planning */}
          <div className="border border-gray-600 rounded-xl p-8 bg-[#33271f] hover:bg-[#3d2e24] transition">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-600 bg-opacity-20 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.894L9 1m6 19l5.447-2.724A2 2 0 0021 15.382V5.618a2 2 0 00-1.553-1.894L15 1m-6 19V1m6 19V1"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Planning</h3>
            <p className="text-gray-300">
              Interactive map with crowd forecasts, weather trends, and
              festival dates to plan your ideal visit.
            </p>
          </div>

          {/* Expert Guidance */}
          <div className="border border-gray-600 rounded-xl p-8 bg-[#33271f] hover:bg-[#3d2e24] transition">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-500 bg-opacity-20 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-6 8a6 6 0 00-6 6h12a6 6 0 00-6-6z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
            <p className="text-gray-300">
              Connect with experienced pilgrims for personalized advice and insider tips.
            </p>
          </div>

          {/* Share Experiences */}
          <div className="border border-gray-600 rounded-xl p-8 bg-[#33271f] hover:bg-[#3d2e24] transition">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 bg-opacity-20 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h8m-8 4h5m-5 4h10M5 6h14M5 18h.01"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Share Experiences</h3>
            <p className="text-gray-300">
              Join a vibrant community sharing stories, photos, and helpful travel tips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
