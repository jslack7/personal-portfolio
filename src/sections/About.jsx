
import { ArrowUpRight, GraduationCap, Heart, Sparkles } from "lucide-react";
import FlowerSymbol from "../components/FlowerSymbol";

export default function About() {
    return (
        <section
            className="about-section"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="container">
                <div className="about-grid">
                    <div className="about-photo-column">
                        <div className="about-photo-frame">
                            <img
                                src="/images/profile.png"
                                alt="Jessika, full-stack developer"
                                className="about-photo"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <FlowerSymbol className="about-photo-flower" />
                    </div>

                    <div className="about-text">
                        <p className="section-eyebrow">Get to Know Me</p>

                        <h2 id="about-title">
                            A Little About <em>Me</em>
                        </h2>

                        <p>
                            I'm Jessika, an aspiring full-stack developer with a
                            passion for bringing creative ideas to life through code.
                        </p>

                        <p>
                            As a student at Base Camp Coding Academy, I'm developing
                            my skills in building thoughtful, functional applications
                            while exploring the connection between technology,
                            creativity, and design.
                        </p>

                        <p>
                            I enjoy creating digital experiences that are approachable,
                            purposeful, and visually engaging. Whether I'm solving
                            a coding challenge or designing a new application,
                            I love learning something new along the way.
                        </p>

                        <div className="about-highlights">
                            <div className="about-highlight">
                                <GraduationCap size={20} aria-hidden="true" />
                                <span>Always Learning</span>
                            </div>

                            <div className="about-highlight">
                                <Sparkles size={20} aria-hidden="true" />
                                <span>Creative Thinking</span>
                            </div>

                            <div className="about-highlight">
                                <Heart size={20} aria-hidden="true" />
                                <span>Thoughtful Design</span>
                            </div>
                        </div>

                        <a className="about-link" href="#skills">
                            Explore My Skills
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
