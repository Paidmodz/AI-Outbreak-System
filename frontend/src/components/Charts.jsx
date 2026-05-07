import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Charts = () => {

    const barData = {

        labels: [
            "USA",
            "India",
            "Brazil",
            "Russia",
            "UK"
        ],

        datasets: [
            {
                label: "COVID Cases",

                data: [
                    500000,
                    450000,
                    300000,
                    200000,
                    150000
                ],

                backgroundColor: [
                    "#06B6D4"
                ]
            }
        ]
    };

    const pieData = {

        labels: [
            "Recovered",
            "Deaths",
            "Active"
        ],

        datasets: [
            {
                data: [
                    70,
                    10,
                    20
                ],

                backgroundColor: [
                    "#06B6D4",
                    "#EF4444",
                    "#FACC15"
                ]
            }
        ]
    };

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="bg-[#112240] p-6 rounded-2xl">

                <h2 className="text-2xl mb-6">

                    Cases by Country

                </h2>

                <Bar data={barData} />

            </div>

            <div className="bg-[#112240] p-6 rounded-2xl">

                <h2 className="text-2xl mb-6">

                    Case Distribution

                </h2>

                <Pie data={pieData} />

            </div>

        </div>

    );

};

export default Charts;