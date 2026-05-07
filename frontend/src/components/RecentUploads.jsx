import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

const RecentUploads = () => {

    const [uploads, setUploads] =
        useState([]);

    useEffect(() => {

        fetchUploads();

    }, []);

    const fetchUploads = async () => {

        try {

            const response =
                await axios.get(
                    "http://localhost:5001/stats"
                );

            setUploads(
                response.data.recentUploads
            );

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-[#112240] p-8 rounded-2xl mt-10">

            <h2 className="text-2xl text-cyan-400 mb-6">

                Recent Uploads

            </h2>

            <div className="space-y-4">

                {uploads.map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#1B2A41] p-4 rounded-xl"
                    >

                        <p className="text-white">

                            {item.filename}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default RecentUploads;