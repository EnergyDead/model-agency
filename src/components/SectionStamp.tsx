import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import CircularText from "./CircularText";
import "./SectionStamp.css";
import LogoLockup from "./LogoLockup";
import Reveal from "./Reveal";

export default function SectionStamp() {
    const { t } = useTranslation();

    return (
        <motion.section
            className="stamp"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="stamp__grid">
                <Reveal className="stamp__left" delay={0.1}>
                    <div className="stamp__copy">
                        <LogoLockup title={t("brand.title")} subtitle={t("brand.stampSubtitle") ?? ""} />
                    </div>

                </Reveal>

                <Reveal className="stamp__right" delay={0.2} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}>
                    <div className="stamp__ring">
                        <div className="stamp__circular2">
                            <CircularText
                                text={t("brand.circularText") ?? ""}
                                onHover="speedUp"
                                spinDuration={40}
                                className="stamp__circular"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </motion.section>
    );
}