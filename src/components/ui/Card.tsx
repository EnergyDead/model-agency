import { ComponentPropsWithoutRef, ReactNode } from "react";

type CardProps = ComponentPropsWithoutRef<"section"> & {
    as?: "div" | "section";
    children: ReactNode;
    variant?: "default" | "highlight";
};

export default function Card({ as = "div", variant = "default", className, children, ...rest }: CardProps) {
    const Component = as;
    const classes = ["ui-card", variant === "highlight" ? "ui-card--highlight" : null, className]
        .filter(Boolean)
        .join(" ");

    return (
        <Component className={classes} {...rest}>
            {children}
        </Component>
    );
}
