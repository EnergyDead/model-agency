import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseButtonProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    variant?: ButtonVariant;
}

type NativeButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
        to?: never;
    };

type LinkButtonProps = BaseButtonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
        as: "link";
        to: string;
    };

type ButtonProps = NativeButtonProps | LinkButtonProps;

export default function Button({ as = "button", variant = "primary", fullWidth, className, ...props }: ButtonProps) {
    const classes = [
        "ui-button",
        `ui-button--${variant}`,
        fullWidth ? "ui-button--full" : null,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (as === "link") {
        const { to, ...rest } = props as LinkButtonProps;
        return (
            <Link to={to} className={classes} {...rest}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={classes} {...(props as NativeButtonProps)}>
            {props.children}
        </button>
    );
}
