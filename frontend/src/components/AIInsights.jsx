import React from "react";

const AIInsights = () => {

    const insights = [

        {
            title:
                "High Humidity Risk",

            description:
                "Humidity above 80% may increase dengue outbreak probability."
        },

        {
            title:
                "COVID Trend Rising",

            description:
                "AI detected increasing confirmed cases trend."
        },

        {
            title:
                "Population Density Alert",

            description:
                "High density regions show faster disease spread."
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {insights.map((item, index) => (

                <div
                    key={index}
                    className="bg-[#112240] glow-card p-6 rounded-2xl border border-cyan-500"
                >

                    <h2 className="text-2xl text-cyan-400 mb-4">

                        {item.title}

                    </h2>

                    <p className="text-gray-300 leading-8">

                        {item.description}

                    </p>

                </div>

            ))}

        </div>

    );

};

export default AIInsights;