
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Resume />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
