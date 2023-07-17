import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/signup/", formData)
            .then((response) => {
                // Handle successful form submission
                console.log(response.data);
                setFormData({
                    email: "",
                    password: "",
                    password_confirmation: "",
                    first_name: "",
                    last_name: "",
                });
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    // Handle form errors
                    setErrors(error.response.data);
                    console.log(error.response.data);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {/* Render form fields */}
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
                {errors && errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                )}
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
                {errors &&
                    errors.password &&
                    errors.password.map((error, index) => (
                        <p key={index} className="text-red-500">
                            {error.message}
                        </p>
                    ))}
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
            </div>
            {/* Add other form fields */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
