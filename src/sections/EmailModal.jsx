import React, { useState } from "react";
import { SendEmail } from "../services/userService"; 
const EmailModal = ({ isOpen, onClose, franchiseEmail }) => {
    const [formData, setFormData] = useState({
        from: "EXPANDING EXPRESS",
        to: franchiseEmail || "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async () => {
        try {
            const res = await SendEmail(formData);
            console.log("Login Response:", res);
            if (res) {
                alert("Email sent successfully!");
                onClose();
            } else {
                alert("Failed to send email.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-center">Send Email</h2>

                <label className="block mt-4">From:</label>
                <input
                    type="email"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                />

                <label className="block mt-2">To:</label>
                <input
                    type="email"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    readOnly
                />

                <label className="block mt-2">Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                />

                <label className="block mt-2">Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ensure that you provide your contact details here."
                    className="w-full p-2 border rounded-md h-24"
                />

                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={sendEmail}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        Send Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailModal;
