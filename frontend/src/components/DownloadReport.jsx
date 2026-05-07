import React from "react";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

const DownloadReport = ({ history }) => {

    const downloadPDF = () => {

        const doc = new jsPDF();

        // Title
        doc.setFontSize(20);

        doc.text(
            "AI Outbreak Prediction Report",
            20,
            20
        );

        // Table
        autoTable(doc, {

            startY: 40,

            head: [[
                "Confirmed",
                "Deaths",
                "Recovered",
                "Active",
                "Population",
                "Result"
            ]],

            body: history.map((item) => [

                item.confirmed,

                item.deaths,

                item.recovered,

                item.active,

                item.population,

                item.result

            ])

        });

        // Save PDF
        doc.save("AI_Outbreak_Report.pdf");

    };

    return (

        <button
            onClick={downloadPDF}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-bold text-white mb-8"
        >

            Download PDF Report

        </button>

    );

};

export default DownloadReport;