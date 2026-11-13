import { getCityWeather } from "../services/cityWeather";
import { useState, useEffect } from "react";

function Favorites() {

    const [city, setCity] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const savedLocations =
            localStorage.getItem("favorites");

        if (savedLocations) {
            setLocations(
                JSON.parse(savedLocations)
            );
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(locations)
        );
    }, [locations]);

    async function addCity() {

        try {

            const weather = await getCityWeather(city);

            if (
                locations.some(
                    location =>
                        location.city === weather.city
                )
            ) {
                alert("City already added");
                return;
            }
            setLocations([
                ...locations,
                weather
            ]);

            setCity("");

        } catch {
            alert("City not found");
        }
    }

    return (
        <div className="page-container">

            <h1>Favorite Locations</h1>

            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />

            <button onClick={addCity}>
                Add City
            </button>

            {locations.map((location, index) => (

                <div
                    key={index}
                    className="forecast-card"
                >

                    <h2>{location.city}</h2>

                    <p>
                        Temperature: {location.temperature}°C
                    </p>

                    <p>
                        Cloud Cover: {location.cloudCover}%
                    </p>

                    <p>
                        Visibility: {100 - location.cloudCover}%
                    </p>

                    <button onClick={() => removeCity(index)}>
                        Remove
                    </button>

                </div>


            ))}

        </div>
    );
    function removeCity(index) {

        const updated =
            locations.filter(
                (_, i) => i !== index
            );

        setLocations(updated);
    }
}

export default Favorites;