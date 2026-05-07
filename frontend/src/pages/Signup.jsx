import React, {
    useState
} from "react";

import axios from "axios";

const Signup = () => {

    const [formData, setFormData] =
        useState({

            name: "",

            email: "",

            password: ""

        });

    const [message, setMessage] =
        useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            const response =
                await axios.post(

                    "https://ai-outbreak-system.onrender.com/auth/signup",

                    formData

                );

            setMessage(
                response.data.message
            );

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#071028]">

            <form
                onSubmit={handleSignup}
                className="bg-[#112240] p-10 rounded-2xl w-[400px]"
            >

                <h1 className="text-4xl text-cyan-400 mb-8 text-center font-bold">

                    Signup

                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#1B2A41] text-white mb-6"
                />

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

                    Signup

                </button>

                {message && (

                    <p className="text-green-400 mt-6 text-center">

                        {message}

                    </p>

                )}

                <p className="text-gray-400 mt-6 text-center">

                    Already have an account?

                    <span className="text-cyan-400 cursor-pointer ml-2">

                        Login

                    </span>

                </p>

            </form>

        </div>

    );

};

export default Signup;