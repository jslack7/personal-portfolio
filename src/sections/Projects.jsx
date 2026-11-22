
import { useState } from "react";
import {
    ArrowUpRight,
    BarChart3,
    BookOpen,
    ChevronDown,
    Code2,
    Flower2,
    Grid3X3,
} from "lucide-react";

const projects = [
    {
        id: "minefinder",
        title: "MineFinder",
        category: "Python Application",
        status: "Completed",
        icon: Grid3X3,
        description:
            "A Python-based Minesweeper game featuring interactive gameplay, object-oriented programming, and SQLite score tracking.",
        technologies: ["Python", "SQLite", "OOP"],
        highlights: [
            "Built game logic and a playable Minesweeper board.",
            "Used Python classes to organize the application.",
            "Implemented a scoreboard using SQLite.",
        ],
        github: "https://github.com/jslack7/MineFinder",
        demo: null,
    },
    {
        id: "frida-kahlo",
        title: "Frida Kahlo Website",
        category: "Front-End Development",
        status: "Completed",
        icon: BookOpen,
        description:
            "A creative website exploring the life and artwork of Frida Kahlo, built using foundational front-end technologies.",
        technologies: ["HTML", "CSS"],
        highlights: [
            "Structured page content using semantic HTML.",
            "Created a cohesive visual design using CSS.",
            "Practiced page layout and front-end development fundamentals.",
        ],
        github: "https://github.com/jslack7/GOAT-project",
        demo: "https://jslack7.github.io/GOAT-project/",
    },
    {
        id: "roompulse",
        title: "RoomPulse",
        category: "Full-Stack Application",
        status: "Team Project",
        icon: BarChart3,
        description:
            "A real-time polling and survey application that allows organizers to create presentations and participants to respond interactively.",
        technologies: ["React", "JavaScript", "Supabase", "Vite"],
        highlights: [
            "Collaborated on a React application with a teammate.",
            "Built organizer-facing functionality for managing presentations and questions.",
            "Integrated Supabase for application data and live participation.",
        ],
        github: "https://github.com/jslack7/roompulse",
        demo: "https://roompulse-live.vercel.app/",
    },
    {
        id: "peaceful-planner",
        title: "My Peaceful Planner",
        category: "Personal Full-Stack Project",
        status: "In Development",
        icon: Flower2,
        description:
            "A customizable digital planner designed to make organizing tasks, schedules, routines, and personal goals feel more manageable.",
        technologies: ["React", "Vite", "Supabase", "CSS"],
        highlights: [
            "Designed a responsive, botanical-inspired interface.",
            "Developed task management, planning, and personalization features.",
            "Implemented cloud synchronization and accessibility-focused settings.",
        ],
        github: null,
        demo: null,
    },
];

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const ProjectIcon = project.icon;
    const detailsId = `${project.id}-details`;

    return (
        <article className="project-card">
            <div className="project-card-top">
                <div className="project-icon">
                    <ProjectIcon size={26} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <span className="project-status">{project.status}</span>
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <ul className="project-technologies" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            <div className="project-card-bottom">
                <button
                    className="project-details-toggle"
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={detailsId}
                    onClick={() => setExpanded((current) => !current)}
                >
                    {expanded ? "Show Less" : "View Details"}
                    <ChevronDown
                        size={17}
                        className={expanded ? "chevron-expanded" : ""}
                        aria-hidden="true"
                    />
                </button>

                <div className="project-links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            title="GitHub repository"
                        >
                            <Code2 size={19} aria-hidden="true" />
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                            title="Live demo"
                        >
                            <ArrowUpRight size={19} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>

            {expanded && (
                <div className="project-expanded-details" id={detailsId}>
                    <h4>Project Highlights</h4>
                    <ul>
                        {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
}

export default function Projects() {
    return (
        <section
            className="projects-section"
            id="projects"
            aria-labelledby="projects-title"
        >
            <div className="container">
                <div className="projects-heading">
                    <p className="section-eyebrow">Selected Work</p>
                    <h2 id="projects-title">
                        Featured <em>Projects</em>
                    </h2>
                    <p>
                        A collection of projects that reflect my growth as a developer,
                        from foundational front-end work to full-stack applications.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <p className="projects-footer-note">
                    More projects and updates are on the way as I continue learning,
                    building, and refining my work.
                </p>
            </div>
        </section>
    );
}
