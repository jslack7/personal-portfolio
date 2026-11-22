
import FlowerSymbol from "./FlowerSymbol";

export default function BrandLogo() {
    return (
        <a className="brand-logo" href="#home" aria-label="Jessika, back to home">
            <span>Jessika</span>
            <FlowerSymbol className="brand-logo__flower" />
        </a>
    );
}
