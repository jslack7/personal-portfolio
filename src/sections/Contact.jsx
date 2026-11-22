
import { useState } from "react";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    Mail,
    Send
} from "lucide-react";

const contactLinks = [
    {
        label: "Email",
        display: "jslack7@gmail.com",
        href: "mailto:jslack7@gmail.com",
        icon: Mail,
        external: false
    },
    {
        label: "GitHub",
        display: "GitHub",
        href: "https://github.com/jslack7",
        icon: Code2,
        external: true
    },
    {
        label: "LinkedIn",
        display: "LinkedIn",
        href: "https://www.linkedin.com/in/jessika-slack",
        icon: BriefcaseBusiness,
        external: true
    }
];

export default function Contact() {
    const [formStatus, setFormStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (formStatus === "sending") {
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        setFormStatus("sending");
        setErrorMessage("");

        try {
            const response = await fetch(
                "https://formspree.io/f/mppzpweg",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Unable to send message.");
            }

            form.reset();
            setFormStatus("success");
        } catch {
            setFormStatus("error");
            setErrorMessage(
                "Your message couldn't be sent. Please try again in a moment."
            );
        }
    }

    return (
        <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="container">
                <div className="contact-heading">
                    <p className="section-eyebrow">Get In Touch</p>

                    <h2 id="contact-title">
                        Let's <em>Connect</em>
                    </h2>

                    <p>
                        Whether you'd like to discuss a project, share an opportunity,
                        or simply say hello, I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-information">
                        <div className="contact-information-icon">
                            <Mail
                                size={29}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </div>

                        <h3>Let's Start a Conversation</h3>

                        <p>
                            I'm always interested in connecting with fellow developers,
                            exploring opportunities, and learning from new experiences.
                        </p>

                        <div className="contact-social-links">
                            {contactLinks.map((link) => {
                                const ContactIcon = link.icon;

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        {...(link.external
                                            ? {
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            }
                                            : {})}
                                        aria-label={
                                            link.external
                                                ? `${link.label} (opens in a new tab)`
                                                : `Send an email to ${link.display}`
                                        }
                                    >
                                        <ContactIcon
                                            size={20}
                                            aria-hidden="true"
                                        />

                                        <span>{link.display}</span>

                                        <ArrowUpRight
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        aria-label="Contact form"
                        aria-busy={formStatus === "sending"}
                    >
                        <div className="contact-form-field">
                            <label htmlFor="contact-name">
                                Your Name
                            </label>

                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="contact-form-field">
                            <label htmlFor="contact-email">
                                Email Address
                            </label>

                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="contact-form-field">
                            <label htmlFor="contact-message">
                                Your Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                                required
                            />
                        </div>

                        <button
                            className="contact-submit"
                            type="submit"
                            disabled={formStatus === "sending"}
                        >
                            <Send
                                size={18}
                                aria-hidden="true"
                            />

                            {formStatus === "sending"
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                        <div
                            className="contact-form-feedback"
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {formStatus === "sending" && (
                                <p>Sending your message...</p>
                            )}

                            {formStatus === "success" && (
                                <p className="contact-success">
                                    <CheckCircle2
                                        size={19}
                                        aria-hidden="true"
                                    />
                                    Your message was sent successfully!
                                </p>
                            )}

                            {formStatus === "error" && (
                                <p className="contact-error">
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
