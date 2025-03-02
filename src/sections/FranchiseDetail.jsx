import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getfranchise } from "../services/userService";
import EmailModal from "./EmailModal";

const FranchiseDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [franchise, setFranchise] = useState(location.state?.franchise || null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [disable, setdisable] = useState(false);

    useEffect(() => {
        const fetchFranchiseDetails = async () => {
            if (!franchise) {
                try {
                    const response = await getfranchise();
                    if (response?.franchises) {
                        const foundFranchise = response.franchises.find((item) => item._id === id);
                        setFranchise(foundFranchise || null);
                    }
                } catch (error) {
                    console.error("Error fetching franchise details:", error);
                }
            }
        };
        fetchFranchiseDetails();
    }, [id, franchise]);

    if (!franchise) {
        return <p className="text-center text-gray-600">Loading franchise details...</p>;
    }

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6 text-blue-900">
                <div className="relative h-[50vh] rounded-xl shadow-lg overflow-hidden mt-20">
                    <img
                        src={franchise.image2 || franchise.image}
                        alt={franchise.franchiseName}
                        className="w-full h-full object-cover brightness-75"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="space-y-6">
                        <InfoCard title="Company Name" value={franchise.franchiseName} />
                        <InfoCard title="Description" value={franchise.description} />
                        <InfoCard title="Required Investment" value="5,00,000-10,00,000" />
                        <InfoCard title="Contact" value={franchise.mobileNumber} />
                    </div>
                    <div className="space-y-6">
                        <InfoCard title="Location Available" value={franchise.location} />
                        <InfoCard title="Category" value={franchise.category} />
                        <InfoCard title="ROI Period" value="10-months" />
                        <InfoCard title="Email" value={franchise.email} />
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => { setModalOpen(true); setdisable(true); }}
                        disabled={disable}  // This actually disables the button
                        className={`bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-300
        ${disable ? "opacity-50 cursor-not-allowed" : ""} `}
                    >
                        Apply for Franchise
                    </button>
                </div>
            </div>

            <EmailModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} franchiseEmail={franchise.email} />
            <Footer />
        </>
    );
};

const InfoCard = ({ title, value }) => (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg">{value || "N/A"}</p>
    </div>
);

export default FranchiseDetails;
