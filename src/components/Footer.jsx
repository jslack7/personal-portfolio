
import BrandLogo from "./BrandLogo";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <BrandLogo />

                <nav
                    className="footer-navigation"
                    aria-label="Footer navigation"
                >
                    <ul className="footer-nav-links">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <p>
                    Thoughtfully designed and developed with creativity and care.
                </p>

                <small>
                    © {new Date().getFullYear()} Jessika. All rights reserved.
                </small>
            </div>
        </footer>
    );
}
