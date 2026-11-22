
import FlowerSymbol from "./FlowerSymbol";

const flowers = [
    { id: 1, className: "flower--one" },
    { id: 2, className: "flower--two" },
    { id: 3, className: "flower--three" },
    { id: 4, className: "flower--four" },
    { id: 5, className: "flower--five" },
    { id: 6, className: "flower--six" },
    { id: 7, className: "flower--seven" },
    { id: 8, className: "flower--eight" },
];

export default function FloatingFlowers() {
    return (
        <div className="floating-flowers" aria-hidden="true">
            {flowers.map((flower) => (
                <FlowerSymbol
                    key={flower.id}
                    className={`floating-flower ${flower.className}`}
                />
            ))}
        </div>
    );
}
