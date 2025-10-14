import { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import "./WorksPage.css";
import workSet1Before from "../assets/work-2025-10-09-set1-before.jpg";
import workSet1After from "../assets/work-2025-10-09-set1-after.jpg";
import workSet2Before from "../assets/work-2025-10-09-set2-before.jpg";
import workSet2After from "../assets/work-2025-10-09-set2-after.jpg";
import workVideo1 from "../assets/IMG_6271.MOV";
import workVideo2 from "../assets/IMG_6285.MOV";
import Reveal from "./Reveal";

type WorksPageProps = {
    onNavigate: (path: string) => void;
};
export default function WorksPage({ onNavigate }: WorksPageProps) {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <motion.main
            className="works"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.header
                className="works__header"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                <button type="button" className="works__back" onClick={() => onNavigate("/")}>
                    {t("works.back")}
                </button>
                <Reveal className="works__headline" delay={0.15} once={false} initial={{ opacity: 0, y: 20 }}>
                    <p className="works__eyebrow">{t("works.eyebrow")}</p>
                    <h1 className="works__title">{t("works.title")}</h1>
                    <p className="works__lead">{t("works.lead")}</p>
                </Reveal>
            </motion.header>

            <motion.section
                className="works__section"
                aria-labelledby="set1-title"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
                <Reveal className="works__intro" delay={0.1}>
                    <h2 id="set1-title" className="works__section-title">{t("works.first.title")}</h2>
                    <p className="works__description">{t("works.first.description")}</p>
                </Reveal>
                <Reveal className="works__gallery" delay={0.15} initial={{ opacity: 0, y: 32 }}>
                    <motion.figure
                        className="works__media"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    >
                        <span className="works__badge works__badge--before">{t("works.badges.before")}</span>
                        <img src={workSet1Before} alt={t("works.first.beforeAlt") ?? ""} loading="lazy" />
                    </motion.figure>
                    <motion.figure
                        className="works__media"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    >
                        <span className="works__badge works__badge--after">{t("works.badges.after")}</span>
                        <img src={workSet1After} alt={t("works.first.afterAlt") ?? ""} loading="lazy" />
                    </motion.figure>
                </Reveal>
            </motion.section>

            <motion.section
                className="works__section"
                aria-labelledby="set2-title"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
                <Reveal className="works__intro" delay={0.1}>
                    <h2 id="set2-title" className="works__section-title">{t("works.second.title")}</h2>
                    <p className="works__description">{t("works.second.description")}</p>
                </Reveal>
                <Reveal className="works__gallery" delay={0.15} initial={{ opacity: 0, y: 32 }}>
                    <motion.figure
                        className="works__media"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    >
                        <span className="works__badge works__badge--before">{t("works.badges.before")}</span>
                        <img src={workSet2Before} alt={t("works.second.beforeAlt") ?? ""} loading="lazy" />
                    </motion.figure>
                    <motion.figure
                        className="works__media"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    >
                        <span className="works__badge works__badge--after">{t("works.badges.after")}</span>
                        <img src={workSet2After} alt={t("works.second.afterAlt") ?? ""} loading="lazy" />
                    </motion.figure>
                </Reveal>
            </motion.section>
            <motion.section
                className="works__section works__section--final"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
                <Reveal className="works__intro" delay={0.1}>
                    <h2 className="works__section-title">{t("works.final.title")}</h2>
                    <p className="works__description">{t("works.final.description")}</p>
                </Reveal>
                <Reveal className="works__videos works__videos--local" delay={0.15} initial={{ opacity: 0, y: 32 }}>
                    <motion.video
                        src={workVideo1}
                        className="works__video-file"
                        controls
                        playsInline
                        preload="metadata"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    />
                    <motion.video
                        src={workVideo2}
                        className="works__video-file"
                        controls
                        playsInline
                        preload="metadata"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    />
                </Reveal>
            </motion.section>
        </motion.main>
    );
}
