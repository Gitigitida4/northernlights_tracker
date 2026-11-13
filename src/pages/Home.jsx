import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="hero">
            <h1>🌌 Aurora Tracker</h1>

            <p>
                Track Northern Lights visibility based on real-time weather conditions.
            </p>

            <div className="stats-container">
                <div className="stat-card">
                    <h3>Live Aurora Data</h3>
                    <p>Check current conditions</p>
                </div>

                <div className="stat-card">
                    <h3>24h Forecast</h3>
                    <p>See cloud cover predictions</p>
                </div>

                <div className="stat-card">
                    <h3>Favorite Cities</h3>
                    <p>Save locations permanently</p>
                </div>
            </div>

            <div
                style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "15px",
                }}
            >
                <Link to="/forecast">
                    <button>View Forecast</button>
                </Link>

                <Link to="/favorites">
                    <button>Favorite Locations</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
