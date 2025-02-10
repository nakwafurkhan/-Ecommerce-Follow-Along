import React, { useState } from 'react';
import "./SignUp.css";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            password: ""
        };

        // Name validation
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Email validation
        if (!form.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!form.email.includes("@")) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Password validation
        if (!form.password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (form.password.length < 8 || form.password.length > 16) {
            newErrors.password = "Password must be between 8-16 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();
            
            if (response.ok) {
                alert("Registration successful!");
                setForm({
                    name: "",
                    email: "",
                    password: ""
                });
            } else {
                alert(data.message || "Registration failed. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className={errors.password ? "error" : ""}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default SignUp;