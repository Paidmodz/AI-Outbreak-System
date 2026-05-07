import React from "react";

import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup
} from "react-leaflet";

const outbreakData = [

    {
        country: "India",
        position: [20.5937, 78.9629],
        cases: 500000,
        risk: "HIGH RISK"
    },

    {
        country: "USA",
        position: [37.0902, -95.7129],
        cases: 700000,
        risk: "HIGH RISK"
    },

    {
        country: "Brazil",
        position: [-14.2350, -51.9253],
        cases: 300000,
        risk: "MEDIUM RISK"
    },

    {
        country: "Russia",
        position: [61.5240, 105.3188],
        cases: 200000,
        risk: "LOW RISK"
    }

];

const Heatmap = () => {

    return (

        <div className="p-10 text-white">

            <h1 className="text-4xl font-bold text-cyan-400 mb-10">

                Global Outbreak Heatmap

            </h1>

            <div className="rounded-2xl overflow-hidden">

                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    style={{
                        height: "600px",
                        width: "100%"
                    }}
                >

                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {outbreakData.map((item, index) => (

                        <CircleMarker
                            key={index}
                            center={item.position}
                            radius={item.cases / 30000}
                            pathOptions={{
                                color:
                                    item.risk === "HIGH RISK"
                                        ? "red"
                                        : item.risk === "MEDIUM RISK"
                                        ? "yellow"
                                        : "green",

                                fillOpacity: 0.6
                            }}
                        >

                            <Popup>

                                <div>

                                    <h2>

                                        {item.country}

                                    </h2>

                                    <p>

                                        Cases: {item.cases}

                                    </p>

                                    <p>

                                        Risk: {item.risk}

                                    </p>

                                </div>

                            </Popup>

                        </CircleMarker>

                    ))}

                </MapContainer>

            </div>

        </div>

    );

};

export default Heatmap;