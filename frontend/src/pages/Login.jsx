import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:5001/auth/login",

                formData

            );

            // Save token
            localStorage.setItem(
                "token",
                response.data.token
            );

            setMessage(response.data.message);

            // Redirect to dashboard
            navigate("/dashboard");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#071028]">

            <form
                onSubmit={handleLogin}
                className="bg-[#112240] p-10 rounded-2xl w-[400px]"
            >

                <h1 className="text-4xl text-cyan-400 mb-8 text-center font-bold">

                    Login

                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#1B2A41] text-white mb-6"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#1B2A41] text-white mb-6"
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-bold text-white"
                >

                    Login

                </button>

                {message && (

                    <p className="text-green-400 mt-6 text-center">

                        {message}

                    </p>

                )}

            </form>

        </div>

    );

};

export default Login;