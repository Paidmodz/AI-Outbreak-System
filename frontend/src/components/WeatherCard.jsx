import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

const WeatherCard = () => {

    const [weather, setWeather] =
        useState(null);

    const [city, setCity] = useState("Guwahati");

    useEffect(() => {

        fetchWeather();

    }, []);

    const fetchWeather = async () => {

        try {

            const API_KEY =
                "c1cdb1440ff4d2a5a278bae2fc4bb0ff";

            const response =
                await axios.get(

                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

                );

            setWeather(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-[#112240] p-8 rounded-2xl mt-10">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl text-cyan-400">

                    Live Weather

                </h2>

                <div className="flex gap-4">

                    <input
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) =>
                            setCity(e.target.value)
                        }
                        className="bg-[#1B2A41] p-3 rounded-xl text-white"
                    />

                    <button
                        onClick={fetchWeather}
                        className="bg-cyan-500 px-5 rounded-xl"
                    >

                        Search

                    </button>

                </div>

            </div>

            {weather && (

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-[#1B2A41] p-6 rounded-xl">

                        <h3 className="text-gray-400">

                            Temperature

                        </h3>

                        <p className="text-3xl text-cyan-400 mt-4">

                            {weather.main.temp}°C

                        </p>

                    </div>

                    <div className="bg-[#1B2A41] p-6 rounded-xl">

                        <h3 className="text-gray-400">

                            Humidity

                        </h3>

                        <p className="text-3xl text-cyan-400 mt-4">

                            {weather.main.humidity}%

                        </p>

                    </div>

                    <div className="bg-[#1B2A41] p-6 rounded-xl">

                        <h3 className="text-gray-400">

                            Weather

                        </h3>

                        <p className="text-3xl text-cyan-400 mt-4">

                            {weather.weather[0].main}

                        </p>

                    </div>

                    <div className="bg-[#1B2A41] p-6 rounded-xl">

                        <h3 className="text-gray-400">

                            Wind Speed

                        </h3>

                        <p className="text-3xl text-cyan-400 mt-4">

                            {weather.wind.speed}

                        </p>

                    </div>

                </div>

            )}

        </div>

    );

};

export default WeatherCard;