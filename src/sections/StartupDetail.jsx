import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getstartup } from "../services/userService";
import EmailModal from "./EmailModal";

const StartupDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [franchise, setFranchise] = useState(location.state?.franchise || null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [disable, setdisable] = useState(false);

    useEffect(() => {
        const fetchstartup = async () => {
            try {
                // If data is already available via navigation state, skip fetching
                if (!franchise) {
                    const response = await getstartup();
                    if (response?.startups) {
                        const foundFranchise = response.startups.find((item) => item._id === id);
                        setFranchise(foundFranchise || null);
                    }
                }
            } catch (error) {
                console.error("Error fetching startup details:", error);
            }
        };

        fetchstartup();
    }, [id, franchise]); // Only fetch if `franchise` is null

    if (!franchise) {
        return <p className="text-center text-gray-600">Loading franchise details...</p>;
    }

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6 text-blue-900">
                {/* Banner Section */}
                <div className="relative h-[60vh] rounded-xl shadow-lg overflow-hidden mt-20">
                    <img
                        src={franchise.image2 || franchise.image} // Use a fallback if image2 is missing
                        alt={franchise.startupName}
                        className="w-full h-full object-cover brightness-75"
                    />
                </div>

                {/* Franchise Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="space-y-6">
                        <InfoCard title="Company Name" value={franchise.startupName} />
                        <InfoCard title="Description" value={franchise.description} />
                        <InfoCard title="Category" value={franchise.category} />
                        <InfoCard title="Contact" value={franchise.mobileNumber} />

                    </div>
                    <div className="space-y-6">
                        <InfoCard title="Location Available" value={franchise.location} />
                        <InfoCard title="Required Investment" value="5,00,000-10,00,000" />
                        <InfoCard title="ROI Period" value="10-months" />
                        <InfoCard title="Email" value={franchise.email} />

                    </div>

                </div>

                {/* Apply Button */}
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => { setModalOpen(true); setdisable(true); }}
                        disabled={disable}  // This actually disables the button
                        className={`bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-300
        ${disable ? "opacity-50 cursor-not-allowed" : ""} `}
                    >
                        Apply for StartUp
                    </button>
                </div>
            </div>
            <EmailModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} franchiseEmail={franchise.email} />
            <Footer />
        </>
    );
};

// Info Card Component
const InfoCard = ({ title, value }) => (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg">{value || "N/A"}</p> {/* Handle missing data */}
    </div>
);

export default StartupDetail;
