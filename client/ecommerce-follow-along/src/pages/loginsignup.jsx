import React, { useState } from 'react';
import '../css/signup.css';
import { useNavigate } from "react-router-dom";

import email from '../assets/email.png';
import password from '../assets/password.png';
import person from '../assets/person.png';

const Signup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        // Email validation (simple check for a valid email format)
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        // Password validation (check if it's at least 6 characters long)
        if (!formData.password || formData.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // Name validation (check if the name is not empty)
        if (action === "Sign Up" && !formData.name) {
            formErrors.name = "Name is required.";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Submit form (you can add the logic to send the data to the server here)
            console.log(`${action} Form Submitted`, formData);
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? (
                    <div></div>
                ) : (
                    <div className="input">
                        <img src={person} alt="" />
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                )}

                <div className="input">
                    <img src={email} alt="" />
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Id'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="input">
                    <img src={password} alt="" />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
            </div>

            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}

            <div className="submit-container"  >
           
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up"); }}>
                    <div className='button' onClick={handleSubmit}>Sign Up</div>
                </div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login"); }}>
                    <div className='button' onClick={handleSubmit}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
