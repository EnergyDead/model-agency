import { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import "./TeamPage.css";
import feruzaPortrait from "../assets/feruza.jpg";
import operationsPortrait from "../assets/team2.png";
import artistryPortrait from "../assets/team3.png";
import skincarePortrait from "../assets/team4.png";
import Reveal from "./Reveal";

type TeamPageProps = {
    onNavigate: (path: string) => void;
};

type MemberCopy = {
    name: string;
    role: string;
    bio: string;
    photoAlt?: string;
};

type MemberKey = "ceo" | "operations" | "artistry" | "skincare";

type MemberConfig = {
    key: MemberKey;
    image: string;
};

const memberConfig: MemberConfig[] = [
    { key: "ceo", image: feruzaPortrait },
    { key: "operations", image: operationsPortrait },
    { key: "artistry", image: artistryPortrait },
    { key: "skincare", image: skincarePortrait },
];

export default function TeamPage({ onNavigate }: TeamPageProps) {
    const { t } = useTranslation();
    const copies = t("team.members", { returnObjects: true }) as Record<MemberKey, MemberCopy>;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <motion.main
            className="team"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.header
                className="team__header"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                <button type="button" className="team__back" onClick={() => onNavigate("/")}>
                    {t("team.back")}
                </button>
                <Reveal className="team__headline" delay={0.15} once={false} initial={{ opacity: 0, y: 20 }}>
                    <p className="team__eyebrow">{t("team.eyebrow")}</p>
                    <h1 className="team__title">{t("team.title")}</h1>
                    <p className="team__lead">{t("team.lead")}</p>
                </Reveal>
            </motion.header>

            <motion.section
                className="team__members"
                aria-label={t("team.title") ?? ""}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {memberConfig.map(({ key, image }) => {
                    const copy = copies[key] ?? { name: key, role: "", bio: "", photoAlt: "" };

                    return (
                        <motion.article
                            key={key}
                            className="team__card"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                            <Reveal className="team__media" delay={0.1}>
                                <img src={image} alt={copy.photoAlt ?? copy.name} loading="lazy" />
                            </Reveal>
                            <Reveal className="team__info" delay={0.15} initial={{ opacity: 0, y: 16 }}>
                                <p className="team__role">{copy.role}</p>
                                <h2 className="team__name">{copy.name}</h2>
                                <p className="team__bio">{copy.bio}</p>
                            </Reveal>
                        </motion.article>
                    );
                })}
            </motion.section>
        </motion.main>
    );
}
