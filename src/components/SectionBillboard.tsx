import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import "./SectionBillboard.css";
import img1 from "../assets/billboard-1.jpg";
import img2 from "../assets/billboard-2.jpg";
import img3 from "../assets/billboard-3.jpg";
import Reveal from "./Reveal";

export default function SectionBillboard() {
    const { t } = useTranslation();

    return (
        <motion.section
            className="billboard"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="billboard__inner">
                <Reveal
                    className="billboard__track"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    delay={0.1}
                >
                    <img src={img3} alt={t("billboard.alt3") ?? ""} className="billboard__img" />
                    <img src={img2} alt={t("billboard.alt2") ?? ""} className="billboard__img" />
                    <img src={img1} alt={t("billboard.alt1") ?? ""} className="billboard__img" />
                </Reveal>
            </div>
        </motion.section>
    );
}
