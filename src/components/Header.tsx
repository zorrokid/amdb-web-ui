import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/releases">Releases</Link>
        </nav>
    );
}