type LogoLockupProps = {
    title: string;
    subtitle: string;
};

export default function LogoLockup({ title, subtitle }: LogoLockupProps) {
    return (
        <div className="logo-lockup" aria-label={`${title} ${subtitle}`}>
            <div className="logo-lockup__title">{title}</div>
            <div className="logo-lockup__subtitle">{subtitle}</div>
        </div>
    );
}