import React from "react";

const AlertBanner = () => {

    return (

        <div className="bg-red-500 text-white p-5 rounded-2xl mb-10 animate-pulse">

            <h2 className="text-2xl font-bold">

                ⚠ High Risk Outbreak Detected

            </h2>

            <p className="mt-2">

                Immediate monitoring required.

            </p>

        </div>

    );

};

export default AlertBanner;