import { useEffect, useState } from "react";
import { fetchWeather } from "../services/api";

function Forecast() {
    const [data, setData] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const result = await fetchWeather(65.0121, 25.4651);
            setData(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-4">
            <h2>Forecast</h2>

            {data && (
                <div>
                    {data.daily.time.map((day, index) => (
                        <div key={day}>
                            {day} -
                            {data.daily.temperature_2m_max[index]} °C
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Forecast;