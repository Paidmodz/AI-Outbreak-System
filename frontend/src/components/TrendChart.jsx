import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const TrendChart = () => {

    const [data, setData] =
        useState([]);

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        try {

            const response =
                await axios.get(
                    "http://localhost:5001/history"
                );

            const formatted =
                response.data.map((item) => ({

                    confirmed:
                        item.confirmed,

                    deaths:
                        item.deaths

                }));

            setData(formatted);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-[#112240] p-8 rounded-2xl mt-10">

            <h2 className="text-2xl text-cyan-400 mb-8">

                Outbreak Trends

            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >

                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="confirmed" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="confirmed"
                        stroke="#06B6D4"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="deaths"
                        stroke="#EF4444"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

};

export default TrendChart;