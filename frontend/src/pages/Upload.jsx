import React, { useState } from "react";

import axios from "axios";

const Upload = () => {

    const [file, setFile] = useState(null);

    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {

        setFile(e.target.files[0]);

    };

    const handleUpload = async () => {

        if (!file) {

            alert("Select CSV File");

            return;

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://localhost:5001/upload",
                formData
            );

            setMessage(response.data.message);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-10 text-white">

            <h1 className="text-4xl font-bold text-cyan-400 mb-10">

                Upload Dataset

            </h1>

            <div className="bg-[#112240] p-10 rounded-2xl max-w-2xl">

                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mb-6"
                />

                <button
                    onClick={handleUpload}
                    className="bg-cyan-500 px-6 py-3 rounded-xl font-bold"
                >
                    Upload CSV
                </button>

                {message && (

                    <p className="mt-6 text-green-400">

                        {message}

                    </p>

                )}

            </div>

        </div>

    );

};

export default Upload;