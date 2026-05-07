import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import { motion }
from "framer-motion";

const StatsCards = () => {

    const [stats, setStats] =
        useState({

            totalDatasets: 0,

            totalUsers: 0

        });

    useEffect(() => {

        fetchStats();

    }, []);

    const fetchStats = async () => {

        try {

            const response =
                await axios.get(
                    "http://localhost:5001/stats"
                );

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const cards = [

        {
            title: "Datasets",
            value: stats.totalDatasets
        },

        {
            title: "Users",
            value: stats.totalUsers
        },

        {
            title: "Predictions",
            value: "1.2K"
        },

        {
            title: "High Risk Areas",
            value: "12"
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

            {cards.map((item, index) => (

                <motion.div
                    key={index}

                    initial={{ opacity: 0, y: 50 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.5 }}

                    className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
                >

                    <h2 className="text-gray-400 text-lg">

                        {item.title}

                    </h2>

                    <p className="text-3xl font-bold text-cyan-400 mt-4">

                        {item.value}

                    </p>

                </motion.div>

            ))}

        </div>

    );

};

export default StatsCards;