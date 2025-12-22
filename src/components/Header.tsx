import logo from "../assets/genz-sentry-logo.svg";

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className="header">
            <div className="header__brand">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Genz Sentry logo"
                />
                <h1 className="header__title">{title}</h1>
            </div>
        </header>
    );
}
