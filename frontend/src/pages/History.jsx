import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import DownloadReport
from "../components/DownloadReport";

const History = () => {

    const [history, setHistory] =
        useState([]);

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        try {

            const response =
                await axios.get(
                    "https://ai-outbreak-system.onrender.com/history"
                );

            setHistory(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-10 text-white">

            <h1 className="text-4xl font-bold text-cyan-400 mb-10">

                Prediction History

            </h1>

            <DownloadReport history={history} />

            <div className="space-y-6">

                {history.map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#112240] p-6 rounded-2xl"
                    >

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

                            <div>
                                <p className="text-gray-400">
                                    Confirmed
                                </p>

                                <h2>
                                    {item.confirmed}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400">
                                    Deaths
                                </p>

                                <h2>
                                    {item.deaths}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400">
                                    Recovered
                                </p>

                                <h2>
                                    {item.recovered}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400">
                                    Active
                                </p>

                                <h2>
                                    {item.active}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400">
                                    Population
                                </p>

                                <h2>
                                    {item.population}
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400">
                                    Result
                                </p>

                                <h2 className="text-red-400">

                                    {item.result}

                                </h2>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default History;