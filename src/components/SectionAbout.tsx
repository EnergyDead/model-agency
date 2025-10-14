import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import "./SectionAbout.css";
import clinicInterior from "../assets/billboard-3.jpg";
import Reveal from "./Reveal";

type SectionAboutProps = {
    onViewTeam: () => void;
};

export default function SectionAbout({ onViewTeam }: SectionAboutProps) {
    const { t } = useTranslation();
    const listItems = t("about.list", { returnObjects: true }) as string[];

    return (
        <motion.section
            className="about about--dark"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="about__inner">
                <Reveal className="about__photo" delay={0.1}>
                    <img src={clinicInterior} alt={t("about.photoAlt") ?? ""} />
                </Reveal>

                <Reveal className="about__content" delay={0.2}>
                    <h2 className="about__title">{t("about.title")}</h2>

                    <Reveal delay={0.3} initial={{ opacity: 0, y: 24 }}>
                        <p className="about__subtitle">{t("about.subtitle")}</p>
                    </Reveal>

                    <Reveal delay={0.4} initial={{ opacity: 0, y: 24 }}>
                        <p className="about__text">{t("about.description")}</p>
                    </Reveal>

                    <div className="about__list">
                        {listItems.map((item, index) => (
                            <Reveal key={item} delay={0.45 + index * 0.05} initial={{ opacity: 0, y: 16 }}>
                                <p>{item}</p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="about__cta" delay={0.5} initial={{ opacity: 0, y: 24 }}>
                        <button type="button" className="about__button" onClick={onViewTeam}>
                            {t("about.button")}
                        </button>
                        <p className="about__note">{t("about.note")}</p>
                        <p className="about__micro">{t("about.microcopy")}</p>
                    </Reveal>
                </Reveal>
            </div>
        </motion.section>
    );
}
