
import FlowerSymbol from "./components/FlowerSymbol";

export default function App() {
    return (
        <>
            <header
                style={{
                    backgroundColor: "var(--forest-ink)",
                    padding: "1.25rem 2rem",
                }}
            >
                <a
                    href="#home"
                    style={{
                        color: "var(--antique-ivory)",
                        fontFamily: "var(--font-heading)",
                        fontSize: "2rem",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                >
                    Jessika
                    <FlowerSymbol className="brand-flower" />
                </a>
            </header>

            <main
                id="home"
                style={{
                    minHeight: "75vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "3rem 1.5rem",
                    background:
                        "linear-gradient(120deg, #e0e8d8, #fffdf8 60%, #f2efe4)",
                }}
            >
                <div style={{ maxWidth: "800px", textAlign: "center" }}>
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", margin: 0 }}>
                        Hi, I'm Jessika.
                    </h1>

                    <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)" }}>
                        Full-Stack Developer & Creative Problem Solver
                    </p>

                    <p>
                        Welcome to my redesigned portfolio, now powered by React and Vite.
                    </p>
                </div>
            </main>

            <footer
                style={{
                    backgroundColor: "var(--forest-ink)",
                    color: "var(--antique-ivory)",
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                Jessika <FlowerSymbol />
            </footer>
        </>
    );
}
