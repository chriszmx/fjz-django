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
        <form onSubmit={handleSubmit}>
            {/* Render form fields */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                />
            </div>
            <div>
                <input
                    type="password_confirmation"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="confirm password"
                />
            </div>
            <div>
                <input
                    type="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                />
            </div>
            <div>
                <input
                    type="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
            </div>
            {/* Add other form fields */}
            <button type="submit">Sign Up</button>
        </form>
    );
};
export default SignUpForm;
