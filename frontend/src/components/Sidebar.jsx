import React from "react";

import {
    FaHome,
    FaChartBar,
    FaMapMarkedAlt,
    FaVirus,
    FaUpload,
    FaSignOutAlt,
    FaHistory
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {

    const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

};

    return (

        <div className="w-64 min-h-screen bg-[#0B1727] p-6">

            <h1 className="text-3xl font-bold text-cyan-400 mb-10">

                AI Outbreak

            </h1>

            <ul className="space-y-6 text-lg">

                <Link to="/">
                    <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                        <FaHome />
                        Home
                    </li>
                </Link>

                <Link to="/dashboard">
                    <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                        <FaVirus />
                        Dashboard
                    </li>
                </Link>

                <Link to="/analytics">
                    <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                        <FaChartBar />
                        Analytics
                    </li>
                </Link>

                <Link to="/heatmap">
                    <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                        <FaMapMarkedAlt />
                        Heatmap
                    </li>
                </Link>

                <Link to="/history">
                     <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                          <FaHistory />
                          History
                 </li>
                </Link>

                <Link to="/upload">
                    <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer">
                        <FaUpload />
                        Upload
                    </li>

                    <li
                    onClick={handleLogout}
                    className="flex items-center gap-3 hover:text-red-400 cursor-pointer mt-20"
                >
                    <FaSignOutAlt />
                    Logout
                </li>
                </Link>

            </ul>

        </div>

    );

};

export default Sidebar;