import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section>
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/releases">Releases</Link></li>
                </ul>
            </nav>
        </section>
    );
}