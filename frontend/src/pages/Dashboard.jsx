import React, { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import StatsCards from "../components/StatsCards";
import Charts from "../components/Charts";
import RecentUploads from "../components/RecentUploads";
import WeatherCard from "../components/WeatherCard";
import TrendChart from "../components/TrendChart";
import AIInsights from "../components/AIInsights";

const Dashboard = () => {

    const [formData, setFormData] = useState({

        confirmed: "",
        deaths: "",
        recovered: "",
        active: "",
        population: ""

    });

    const [prediction, setPrediction] = useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "https://ai-outbreak-system.onrender.com/predict",

                formData

            );

            setPrediction(
                response.data.prediction
            );

            // Toast Notification

            if (
                response.data.prediction ===
                "HIGH RISK"
            ) {

                toast.error(
                    "⚠ HIGH RISK OUTBREAK DETECTED"
                );

            }

            else {

                toast.success(
                    "✅ LOW RISK AREA"
                );

            }

        }

        catch (error) {

            console.log(error);

            toast.error(
                "Prediction Failed"
            );

        }

    };

    return (

        <div className="bg-[#071028] text-white min-h-screen">

            <div className="p-10">

                <h1 className="text-5xl font-bold text-cyan-400 mb-10">

                    AI Disease Outbreak Dashboard

                </h1>

                {/* Dynamic Alert Banner */}

                {

                    prediction === "HIGH RISK" && (

                        <div className="bg-red-900 p-6 rounded-2xl mb-10 border border-red-500">

                            <h2 className="text-3xl text-red-300 font-bold">

                                ⚠ High Risk Outbreak Detected

                            </h2>

                            <p className="text-red-200 mt-2">

                                Immediate monitoring required.

                            </p>

                        </div>

                    )

                }

                {

                    prediction === "LOW RISK" && (

                        <div className="bg-green-900 p-6 rounded-2xl mb-10 border border-green-500">

                            <h2 className="text-3xl text-green-300 font-bold">

                                ✅ Situation Stable

                            </h2>

                            <p className="text-green-200 mt-2">

                                No major outbreak detected.

                            </p>

                        </div>

                    )

                }

                {/* Stats */}

                <StatsCards />

                {/* Charts */}

                <Charts />

                {/* Recent Uploads */}

                <RecentUploads />

                {/* Weather */}

                <WeatherCard />

                {/* Outbreak Trends */}

                <TrendChart />

                {/* AI Insights */}

                <AIInsights />

                {/* Prediction Form */}

                <div className="bg-[#112240] p-8 rounded-2xl mt-10 border border-cyan-500">

                    <h2 className="text-3xl mb-8 text-cyan-400 font-bold">

                        Predict Outbreak Risk

                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >

                        <input
                            type="number"
                            name="confirmed"
                            placeholder="Confirmed Cases"
                            onChange={handleChange}
                            className="p-4 rounded-xl bg-[#1B2A41] outline-none"
                            required
                        />

                        <input
                            type="number"
                            name="deaths"
                            placeholder="Deaths"
                            onChange={handleChange}
                            className="p-4 rounded-xl bg-[#1B2A41] outline-none"
                            required
                        />

                        <input
                            type="number"
                            name="recovered"
                            placeholder="Recovered"
                            onChange={handleChange}
                            className="p-4 rounded-xl bg-[#1B2A41] outline-none"
                            required
                        />

                        <input
                            type="number"
                            name="active"
                            placeholder="Active Cases"
                            onChange={handleChange}
                            className="p-4 rounded-xl bg-[#1B2A41] outline-none"
                            required
                        />

                        <input
                            type="number"
                            name="population"
                            placeholder="Population"
                            onChange={handleChange}
                            className="p-4 rounded-xl bg-[#1B2A41] outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 p-4 rounded-xl font-bold"
                        >

                            Predict Now

                        </button>

                    </form>

                    {

                        prediction && (

                            <div className="mt-10">

                                <h2 className="text-2xl">

                                    Prediction Result

                                </h2>

                                <p className={`text-5xl mt-4 font-bold ${

                                    prediction === "HIGH RISK"

                                    ? "text-red-400"

                                    : "text-green-400"

                                }`}>

                                    {prediction}

                                </p>

                            </div>

                        )

                    }

                </div>

            </div>

        </div>

    );

};

export default Dashboard;