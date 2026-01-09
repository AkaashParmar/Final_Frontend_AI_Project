import React, { useState } from "react";
import img from "../assets/CandidateLogin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/ApiConstants";
import {
    Eye,
    EyeOff,
    AlertCircle,
    Loader2
} from "lucide-react";

const CandidateRegister = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "phone") {
            const numericValue = value.replace(/[^0-9]/g, "");
            setFormData(prev => ({
                ...prev,
                [name]: numericValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
        
        if (error) setError("");
    };

    const validateForm = () => {
        const { name, email, phone, password } = formData;

        if (!name || !email || !phone || !password) {
            setError("All fields are required");
            return false;
        }

        if (phone.length !== 10) {
            setError("Phone number must be 10 digits");
            return false;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return false;
        }

        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasSmallLetter = /[a-z]/.test(password);
        const hasCapitalLetter = /[A-Z]/.test(password);

        if (!hasNumber) {
            setError("Password must contain at least one number");
            return false;
        }

        if (!hasSpecialChar) {
            setError("Password must contain at least one special character");
            return false;
        }

        if (!hasSmallLetter) {
            setError("Password must contain at least one lowercase letter");
            return false;
        }

        if (!hasCapitalLetter) {
            setError("Password must contain at least one uppercase letter");
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) return;

        setLoading(true);
        setError("");

        try {
            const { data } = await axios.post(`${baseUrl}/api/candidate/register`, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            localStorage.setItem('token', data.token);
            alert("Account successfully created!");
            navigate("/CandidateLogin");
        } catch (err) {
            if (err.response?.data?.error === "Email already exists") {
                alert("Email already registered! Please login.");
            } else {
                setError(err.response?.data?.error || "Registration failed");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF05] py-8">
            <h1 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6">
                Create Your Account
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-4">
                <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                    <p className="text-2xl text-[#0496FF] text-center font-medium mb-8">
                        Join AIRecruiter Today
                    </p>
                    <img src={img} alt="Illustration" className="h-[400px] w-full md:w-auto mx-auto" />
                </div>

                <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-1">
                            Email ID <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter 10-digit phone number"
                            maxLength="10"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Min 8 characters, 1 number, 1 special char, 1 uppercase & 1 lowercase</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-600 text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </p>
                        </div>
                    )}

                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2.5 rounded-md font-medium hover:bg-blue-600 mb-4 disabled:bg-blue-300"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Creating Account...
                            </span>
                        ) : (
                            "Create Account"
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <button onClick={() => navigate("/CandidateLogin")} className="text-blue-600 hover:underline font-medium">
                            Login here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CandidateRegister;