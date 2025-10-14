import clsx from "clsx";
import { useTranslation } from "../lib/i18n";
import { useRevealAnimation } from "../lib/useRevealAnimation";
import "./Hero.css";
import hero from "../assets/hero.png";
import LogoLockup from "./LogoLockup";

type HeroProps = {
    onViewWorks: () => void;
};

export default function Hero({ onViewWorks }: HeroProps) {
    const { t } = useTranslation();
    const { ref, isVisible } = useRevealAnimation({ threshold: 0.3 });

    return (
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero__overlay" />
            <div ref={ref} className={clsx("hero__inner", "reveal", isVisible && "is-visible")}>
                <div className="hero__content">
                    <LogoLockup title={t("brand.title")} subtitle={t("brand.subtitle") ?? ""} />
                    <div className="hero__actions">
                        <button type="button" className="hero__cta" onClick={onViewWorks}>
                            {t("hero.cta")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
