import React, {
    useState
} from "react";

import {
    FaRobot,
    FaTimes
} from "react-icons/fa";

const ChatBot = () => {

    const [messages, setMessages] =
        useState([]);

    const [input, setInput] =
        useState("");

    const [open, setOpen] =
        useState(false);

    const diseases = [

        {
            keywords: [
                "dengue",
                "dangue",
                "mosquito"
            ],

            response:
                "Dengue is a mosquito-borne viral disease causing fever, headache, skin rash and muscle pain."
        },

        {
            keywords: [
                "covid",
                "corona"
            ],

            response:
                "COVID-19 is a respiratory infection spread through droplets."
        },

        {
            keywords: [
                "malaria"
            ],

            response:
                "Malaria spreads through infected mosquitoes and causes fever, chills and sweating."
        },

        {
            keywords: [
                "cholera"
            ],

            response:
                "Cholera is a water-borne bacterial disease causing dehydration and diarrhea."
        },

        {
            keywords: [
                "flu",
                "influenza"
            ],

            response:
                "Flu is a viral infection affecting the respiratory system."
        },

        {
            keywords: [
                "fever"
            ],

            response:
                "Fever may indicate infection or inflammation in the body."
        },

        {
            keywords: [
                "headache"
            ],

            response:
                "Headache may occur due to stress, fever or infection."
        },

        {
            keywords: [
                "cough"
            ],

            response:
                "Persistent cough may indicate respiratory infection."
        },

        {
            keywords: [
                "prevention",
                "safety"
            ],

            response:
                "Maintain hygiene and healthy habits to prevent diseases."
        }

    ];

    const handleSend = () => {

        if (!input) return;

        const userMessage = {

            sender: "user",

            text: input

        };

        const userInput =
            input.toLowerCase();

        let botReply =
            "AI Assistant could not fully understand your query.";

        diseases.forEach((disease) => {

            disease.keywords.forEach((word) => {

                if (
                    userInput.includes(word)
                ) {

                    botReply =
                        disease.response;

                }

            });

        });

        const botMessage = {

            sender: "bot",

            text: botReply

        };

        setMessages([
            ...messages,
            userMessage,
            botMessage
        ]);

        setInput("");

    };

    return (

        <>

            {/* Floating Robot Button */}

            {!open && (

                <button
                    onClick={() =>
                        setOpen(true)
                    }
                    className="fixed bottom-5 right-5 z-50 bg-cyan-500 hover:bg-cyan-400 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
                >

                    <FaRobot size={26} />

                </button>

            )}

            {/* Popup Chatbot */}

            {open && (

                <div className="fixed bottom-20 right-5 z-50 w-[300px] bg-[#112240]/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-cyan-500">

                    {/* Header */}

                    <div className="bg-cyan-500 p-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <FaRobot size={22} />

                            <h2 className="font-bold">

                                AI Health Assistant

                            </h2>

                        </div>

                        <button
                            onClick={() =>
                                setOpen(false)
                            }
                        >

                            <FaTimes size={20} />

                        </button>

                    </div>

                    {/* Chat Area */}

                    <div className="h-[220px] overflow-y-auto p-4 space-y-4 text-white">

                        {messages.map((msg, index) => (

                            <div
                                key={index}
                                className={`p-3 rounded-2xl max-w-[85%] text-sm ${
                                    msg.sender === "user"
                                        ? "bg-cyan-500 ml-auto"
                                        : "bg-[#1B2A41]"
                                }`}
                            >

                                {msg.text}

                            </div>

                        ))}

                    </div>

                    {/* Input */}

                    <div className="flex p-3 gap-2 bg-[#0B1727]">

                        <input
                            type="text"
                            placeholder="Ask health question..."
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            className="flex-1 p-2 rounded-xl bg-[#1B2A41] text-white outline-none text-sm"
                        />

                        <button
                            onClick={handleSend}
                            className="bg-cyan-500 px-3 rounded-xl text-white text-sm"
                        >

                            Send

                        </button>

                    </div>

                </div>

            )}

        </>

    );

};

export default ChatBot;