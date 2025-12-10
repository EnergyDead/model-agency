import { ReactNode } from "react";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    align?: "left" | "center";
    size?: "lg" | "md" | "sm";
    actions?: ReactNode;
    as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
    title,
    subtitle,
    eyebrow,
    align = "left",
    size = "lg",
    actions,
    as = "h1",
}: SectionTitleProps) {
    const classes = ["section-title", `section-title--${align}`, `section-title--${size}`].join(" ");
    const Heading = as;

    return (
        <div className={classes}>
            <div className="section-title__body">
                {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
                <div className="section-title__heading">
                    <Heading className="section-title__title">{title}</Heading>
                    {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
                </div>
            </div>
            {actions ? <div className="section-title__actions">{actions}</div> : null}
        </div>
    );
}
