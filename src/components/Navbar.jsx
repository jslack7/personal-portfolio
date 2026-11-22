
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
];

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
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul
                    id="primary-navigation"
                    className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}
                >
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
