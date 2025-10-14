import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import "./Hero.css";
import hero from "../assets/hero.png";
import LogoLockup from "./LogoLockup";
import Reveal from "./Reveal";

type HeroProps = {
    onViewWorks: () => void;
};

export default function Hero({ onViewWorks }: HeroProps) {
    const { t } = useTranslation();

    return (
        <motion.section
            className="hero"
            style={{ backgroundImage: `url(${hero})` }}
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                className="hero__overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            />
            <div className="hero__inner">
                <Reveal delay={0.2} className="hero__content" once={false}>
                    <LogoLockup title={t("brand.title")} subtitle={t("brand.subtitle") ?? ""} />
                    <Reveal delay={0.35} className="hero__actions" once={false} initial={{ opacity: 0, y: 20 }}>
                        <button type="button" className="hero__cta" onClick={onViewWorks}>
                            {t("hero.cta")}
                        </button>
                    </Reveal>
                </Reveal>
            </div>
        </motion.section>
    );
}
