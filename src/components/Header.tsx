type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className="header">
            <span className="header__logo" aria-hidden>
                ●
            </span>
            <h1 className="header__title">{title}</h1>
        </header>
    );
}
