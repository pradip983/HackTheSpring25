import React, { useState } from "react";
import CommunityLogo from "../assets/Natural Care Logo.jpg";
import { loginUser } from "../services/userService"; // Import API function
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(form);
           

            if (res.user) {
                localStorage.setItem("user", JSON.stringify(res.user)); // Store only user data
                toast.success("Login successful!", {duration: 2000});

                setTimeout(() => {
                    navigate("/");
                }, 2000);

            } else {
                toast.error("Login failed: No user data received.");
            }

        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Toaster position="top-right" />
            <div className="bg-white shadow-lg rounded-xl p-8 w-96 max-w-full">
                <img src={CommunityLogo} alt="Community Logo" className="w-[10vw] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-500 mb-4 text-center">Log In</h3>
                <form onSubmit={handleLogin} className="flex flex-col">
                    <label className="text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md mb-4"
                    />
                    <label className="text-gray-600">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full px-4 py-2 border rounded-md mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <a href="/signup" className="text-blue-500 font-bold">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LogIn;
