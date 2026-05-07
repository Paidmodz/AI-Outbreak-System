import React, { useState } from "react";

import axios from "axios";

import {
    Link,
    useNavigate
} from "react-router-dom";

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

                "https://ai-outbreak-system.onrender.com/auth/login",

                formData

            );

            // Save token
            localStorage.setItem(
                "token",
                response.data.token
            );

            setMessage(response.data.message);

            // Redirect to dashboard
            setTimeout(() => {

                navigate("/dashboard");

            }, 1000);

        } catch (error) {

            console.log(error);

            setMessage(

                error.response?.data?.message ||
                "Login Failed"

            );

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
                    className="w-full p-4 rounded-xl bg-[#1B2A41] text-white mb-6 outline-none"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#1B2A41] text-white mb-6 outline-none"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 p-4 rounded-xl font-bold text-white"
                >

                    Login

                </button>

                {message && (

                    <p className="text-center mt-6 text-green-400">

                        {message}

                    </p>

                )}

                <p className="text-gray-400 mt-6 text-center">

                    Don't have an account?

                    <Link
                        to="/signup"
                        className="text-cyan-400 ml-2 hover:underline"
                    >

                        Signup

                    </Link>

                </p>

            </form>

        </div>

    );

};

export default Login;