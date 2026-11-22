
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <BrandLogo />

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul
                    id="primary-navigation"
                    className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}
                >
                    <li>
                        <a href="#home" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
