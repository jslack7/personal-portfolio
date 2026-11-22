
import {
    Braces,
    Code2,
    Database,
    GitBranch,
    Globe,
    Layers,
    LayoutTemplate,
    Palette,
    Server,
    Terminal,
    Wrench,
} from "lucide-react";

const skillGroups = [
    {
        title: "Front-End Development",
        description: "Building responsive and engaging user interfaces.",
        icon: LayoutTemplate,
        skills: [
            { name: "HTML", icon: Code2 },
            { name: "CSS", icon: Palette },
            { name: "JavaScript", icon: Braces },
            { name: "React", icon: Layers },
            { name: "Responsive Design", icon: Globe },
        ],
    },
    {
        title: "Back-End Development",
        description: "Working with application logic, data, and databases.",
        icon: Server,
        skills: [
            { name: "Python", icon: Terminal },
            { name: "Django", icon: Server },
            { name: "SQL", icon: Database },
            { name: "Supabase", icon: Database },
        ],
    },
    {
        title: "Tools & Concepts",
        description: "The tools and practices that support my development workflow.",
        icon: Wrench,
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Code2 },
            { name: "VS Code", icon: Code2 },
            { name: "REST APIs", icon: Globe },
            { name: "Vite", icon: Layers },
        ],
    },
];

export default function Skills() {
    return (
        <section
            className="skills-section"
            id="skills"
            aria-labelledby="skills-title"
        >
            <div className="container">
                <div className="skills-heading">
                    <p className="section-eyebrow">What I Work With</p>

                    <h2 id="skills-title">
                        My Technical <em>Skills</em>
                    </h2>

                    <p>
                        A growing collection of technologies and tools I'm using
                        throughout my development journey.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                            <article className="skill-card" key={group.title}>
                                <div className="skill-card-icon">
                                    <GroupIcon
                                        size={25}
                                        strokeWidth={1.7}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>{group.title}</h3>

                                <p className="skill-card-description">
                                    {group.description}
                                </p>

                                <ul className="skill-list">
                                    {group.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <li key={skill.name}>
                                                <SkillIcon
                                                    size={17}
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                                <span>{skill.name}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
