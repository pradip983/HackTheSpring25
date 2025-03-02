import { useState, useRef } from "react";
import CommunityLogo from "../assets/Natural Care Logo.jpg";
import { registerUserCustomer, registerUserVender } from "../services/userService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";  

const SignUp = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("customer");

    // Separate states for customer and vendor
    const [customerData, setCustomerData] = useState({ FirstName: "", LastName: "", email: "", password: "" });
    const [vendorData, setVendorData] = useState({ FirstName: "", LastName: "", email: "", password: "", CompanyName: "", CompanyPhone: "" });

    // Handle change separately for customer and vendor
    const handleCustomerChange = (e) => {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    };

    const handleVendorChange = (e) => {
        setVendorData({ ...vendorData, [e.target.name]: e.target.value });
    };

    // Separate submit functions for customer and vendor
    const handleCustomerSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUserCustomer({ ...customerData, role: "customer" });
            toast.success(res.data?.message || "Registration successful!",{duration: 2000});

            setTimeout(() => {
                navigate("/login");
              }, 2000);

        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };

    const handleVendorSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUserVender({ ...vendorData, role: "vendor" });
            toast.success(res.data?.message || "Registration successful!",{duration: 2000});

            setTimeout(() => {
                navigate("/login");
              }, 2000);

        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-white to-gray-100">
           <Toaster position="top-right" />
            {/* Role Toggle Buttons */}
            <div className="fixed top-0 left-0 right-0 flex justify-end gap-4 p-4 bg-white shadow-md">
                <button
                    className={`px-4 py-2 rounded-md transition ${role === "customer" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                    onClick={() => setRole("customer")}
                >
                    Individual
                </button>
                <button
                    className={`px-4 py-2 rounded-md transition ${role === "vendor" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                    onClick={() => setRole("vendor")}
                >
                   Business
                </button>
            </div>

            {/* Conditional Rendering of Forms */}
            {role === "customer" ? (
                <SignUpForm
                    title="Register as Individual"
                    formData={customerData}
                    handleChange={handleCustomerChange}
                    handleSubmit={handleCustomerSubmit}
                    fields={[
                        { name: "FirstName", type: "text", placeholder: "Enter your first name" },
                        { name: "LastName", type: "text", placeholder: "Enter your last name" },
                        { name: "email", type: "email", placeholder: "Enter your email" },
                        { name: "password", type: "password", placeholder: "Enter your password" },
                    ]}
                />
            ) : (
                <SignUpForm
                    title="Register as Business"
                    formData={vendorData}
                    handleChange={handleVendorChange}
                    handleSubmit={handleVendorSubmit}
                    fields={[
                        { name: "FirstName", type: "text", placeholder: "Enter your first name" },
                        { name: "LastName", type: "text", placeholder: "Enter your last name" },
                        { name: "email", type: "email", placeholder: "Enter your email" },
                        { name: "password", type: "password", placeholder: "Enter your password" },
                        { name: "CompanyName", type: "text", placeholder: "Enter your company name" },
                        { name: "CompanyPhone", type: "tel", placeholder: "Enter your company phone", pattern: "[0-9]{10}", maxLength: "10" },
                    ]}
                />
            )}
        </div>
    );
};

// Reusable Form Component
const SignUpForm = ({ title, formData, handleChange, handleSubmit, fields }) => {
    
    return (
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-xl p-8 w-96 max-w-full">
            <img src={CommunityLogo} alt="Community Logo" className="w-[10vw] mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-4">{title}</h3>
            <form onSubmit={handleSubmit}>
                <div className="h-[33vh] overflow-y-auto scrollbar-hide">
                    {fields.map((field, index) => (
                        <div key={index}>
                            <label className="text-gray-600 w-full">{field.name}</label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                required
                                placeholder={field.placeholder}
                                onChange={handleChange}
                                pattern={field.pattern || undefined}
                                maxLength={field.maxLength || undefined}
                                className="w-full px-4 py-2 border rounded-md mb-4"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-2">
                    <input type="checkbox" required />
                    <span className="text-sm"> I agree to terms & Policy </span>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 mt-2 rounded-md hover:bg-blue-600 transition">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
