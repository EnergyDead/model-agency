import "./Hero.css";
import hero from "../assets/hero.png";
import LogoLockup from "./LogoLockup";

type HeroProps = {
    onViewWorks: () => void;
};

export default function Hero({ onViewWorks }: HeroProps) {
    return (
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero__overlay" />
            <div className="hero__inner">
                <div className="hero__content">
                    <LogoLockup title="sérendipité." subtitle="Beauty clinic by Feruza Ashurova" />
                    <div className="hero__actions">
                        <button type="button" className="hero__cta" onClick={onViewWorks}>
                            Смотреть работы
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
