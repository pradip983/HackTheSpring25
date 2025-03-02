"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { franchises } from "../export.js";
import Header from "./Header";
import Footer from "./Footer";
import { getstartup } from "../services/userService";
import { useNavigate } from "react-router-dom";

const Franchise = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const categories = Array.from(new Set(franchises.map((f) => f.category)));
  const locations = Array.from(new Set(franchises.map((f) => f.location)));

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const response = await getstartup();
       
        setData(response?.startups || []);  
      } catch (error) {
        console.error("❌ Error fetching startup:", error);
        setData([]);  
      }
    };

    fetchStartup();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/startup/${id}`);
  };

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen mt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {/* Category Search */}
            <div className="relative w-72">
              <input
                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by Name or Category"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsCategoryOpen(true)}
              />
              <button
                className="absolute right-3 top-3 w-5 h-5 text-black cursor-pointer"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <HiChevronDown />
              </button>

              {isCategoryOpen && (
                <div className="absolute bg-white border rounded-lg shadow-lg mt-1 w-72 z-10">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setSearch(cat);
                        setIsCategoryOpen(false);
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location Search */}
            <div className="relative w-72">
              <input
                className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Select a Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setIsLocationOpen(true)}
              />
              <button
                className="absolute right-3 top-3 w-5 h-5 text-black cursor-pointer"
                onClick={() => setIsLocationOpen(!isLocationOpen)}
              >
                <HiChevronDown />
              </button>

              {isLocationOpen && (
                <div className="absolute bg-white border rounded-lg shadow-lg mt-1 w-72 z-10">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setLocation(loc);
                        setIsLocationOpen(false);
                      }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Franchise Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {data &&
              data
                .filter(
                  (franchise) =>
                    (search === "" ||
                      franchise.startupName.toLowerCase().includes(search.toLowerCase()) ||
                      franchise.category.toLowerCase().includes(search.toLowerCase())) &&
                    (location === "" || franchise.location.toLowerCase().includes(location.toLowerCase()))
                )
                .map((franchise) => (
                  <div
                    key={franchise._id}
                    onClick={() => handleCardClick(franchise._id)}
                    className="bg-[#f8f9fa] border border-[#ddd] rounded-lg overflow-hidden shadow-md cursor-pointer"
                  >
                    <img src={franchise.image} alt={franchise.startupName} className="w-full h-[260px] object-cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-blue-600">{franchise.startupName }</h2>
                      <p className="text-sm text-gray-400 mb-2">{franchise.description}</p>
                      <div className="flex justify-between text-sm text-black">
                        <span className="font-medium">{franchise.category}</span>
                        <span>{franchise.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Franchise;
