
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const navigationRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        }

        function handlePointerDown(event) {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        }

        function handleResize() {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("resize", handleResize);
        };
    }, [menuOpen]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="site-header">
            <nav
                className="navbar container"
                aria-label="Main navigation"
                ref={navigationRef}
            >
                <BrandLogo />

                <button
                    ref={menuButtonRef}
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? (
                        <X size={24} aria-hidden="true" />
                    ) : (
                        <Menu size={24} aria-hidden="true" />
                    )}
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
