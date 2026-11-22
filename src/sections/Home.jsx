
import { ArrowDown, ArrowRight } from "lucide-react";
import FloatingFlowers from "../components/FloatingFlowers";

export default function Home() {
    return (
        <section className="hero" id="home" aria-labelledby="hero-title">
            <FloatingFlowers />

            <div className="hero-content container">
                <p className="hero-eyebrow">
                    Welcome to my portfolio
                </p>

                <h1 id="hero-title">
                    Hi, I'm <span>Jessika.</span>
                </h1>

                <p className="hero-subtitle">
                    Full-Stack Developer &amp; Creative Problem Solver
                </p>

                <p className="hero-description">
                    I combine creativity and technology to build thoughtful,
                    engaging digital experiences. I enjoy transforming ideas
                    into functional applications that make everyday life a
                    little easier.
                </p>

                <div className="hero-actions">
                    <a className="button button-primary" href="#about">
                        Get to Know Me
                        <ArrowRight size={18} aria-hidden="true" />
                    </a>

                    <a className="button button-secondary" href="#about">
                        Learn More
                        <ArrowDown size={18} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
