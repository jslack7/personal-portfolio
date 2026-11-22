
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
            </main>

            <Footer />
        </>
    );
}
