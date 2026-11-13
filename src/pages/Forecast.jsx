import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function Forecast() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        loadForecast();
    }, []);

    async function loadForecast() {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=65.0121&longitude=25.4651&hourly=cloud_cover&forecast_days=1"
        );

        const data = await response.json();

        const chartData = data.hourly.time
            .slice(0, 24)
            .map((time, index) => ({
                time: time.substring(11, 16),
                cloud: data.hourly.cloud_cover[index],
                visibility:
                    100 - data.hourly.cloud_cover[index],
            }));


        setForecast(chartData);
    }

    return (
        <div className="page-container">
            <h1>Forecast</h1>

            <h3>Cloud Cover Forecast (24h)</h3>

            <div className="forecast-card">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={forecast}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="time" />

                        <YAxis
                            domain={[0, 100]}
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="cloud"
                            stroke="#4ef08a"
                            strokeWidth={3}
                        />
                        <Line
                            type="monotone"
                            dataKey="visibility"
                            stroke="#ffc107"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Forecast;