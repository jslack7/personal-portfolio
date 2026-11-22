
import BrandLogo from "./BrandLogo";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <BrandLogo />

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
