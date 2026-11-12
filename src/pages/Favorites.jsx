import { useState } from "react";

function Favorites() {
    const [places, setPlaces] = useState([]);

    const addPlace = () => {
        const city = prompt("Enter city");

        if (!city) return;

        setPlaces([...places, city]);
    };

    return (
        <div className="container mt-4">
            <h2>Favorite Locations</h2>

            <button
                className="btn btn-primary mb-3"
                onClick={addPlace}
            >
                Add location
            </button>

            {places.map((place, index) => (
                <div key={index}>{place}</div>
            ))}
        </div>
    );
}

export default Favorites;