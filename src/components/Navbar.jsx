import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar-custom">
            <Link to="/">Home</Link>
            <Link to="/forecast">Forecast</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
}

export default Navigation;