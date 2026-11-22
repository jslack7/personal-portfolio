
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
                <Skills />
            </main>

            <Footer />
        </>
    );
}
