
import {
    ArrowDownToLine,
    BriefcaseBusiness,
    GraduationCap,
    FileText,
} from "lucide-react";

const highlights = [
    {
        icon: GraduationCap,
        title: "Software Development Education",
        description:
            "Building practical full-stack development skills through Base Camp Coding Academy.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Professional Experience",
        description:
            "Bringing experience in administrative operations, financial services, problem-solving, and collaborative environments.",
    },
    {
        icon: FileText,
        title: "Technical Growth",
        description:
            "Applying JavaScript, React, Python, Django, SQL, and other technologies through hands-on projects.",
    },
];

export default function Resume() {
    return (
        <section
            className="resume-section"
            id="resume"
            aria-labelledby="resume-title"
        >
            <div className="container resume-container">
                <div className="resume-content">
                    <p className="section-eyebrow">My Background</p>

                    <h2 id="resume-title">
                        Experience & <em>Education</em>
                    </h2>

                    <p className="resume-intro">
                        My journey into software development combines technical
                        education with professional experience in operations,
                        communication, and problem-solving.
                    </p>

                    <p className="resume-intro">
                        I enjoy bringing those experiences together to build
                        thoughtful, functional applications that make everyday
                        tasks easier.
                    </p>

                    <a
                        className="resume-download"
                        href="/documents/Jessika_Slack_Resume.pdf"
                        download="Jessika_Slack_Resume.pdf"
                    >
                        <ArrowDownToLine size={19} aria-hidden="true" />
                        Download My Resume
                    </a>
                </div>

                <div className="resume-highlights">
                    {highlights.map((highlight) => {
                        const HighlightIcon = highlight.icon;

                        return (
                            <article className="resume-highlight" key={highlight.title}>
                                <div className="resume-highlight-icon">
                                    <HighlightIcon
                                        size={23}
                                        strokeWidth={1.7}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
