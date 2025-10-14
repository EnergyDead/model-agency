import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import "./SiteFooter.css";
import Reveal from "./Reveal";

type SiteFooterProps = {
    onViewWorks: () => void;
    onViewTeam: () => void;
};

export default function SiteFooter({ onViewWorks, onViewTeam }: SiteFooterProps) {
    const { t } = useTranslation();

    return (
        <motion.footer
            className="footer"
            role="contentinfo"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="footer__inner">
                <Reveal className="footer__heading" delay={0.1}>
                    {t("footer.heading")}
                </Reveal>
                <Reveal className="footer__name" delay={0.15}>
                    {t("footer.name")}
                </Reveal>
                <Reveal delay={0.2} initial={{ opacity: 0, y: 24 }}>
                    <ul className="footer__list">
                        <li>
                            <span className="footer__label">{t("footer.instagram")}</span>{" "}
                            <a
                                href="https://www.instagram.com/bella_cosa_kosmetolog"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @bella_cosa_kosmetolog
                            </a>
                        </li>
                        <li>
                            <a href="tel:+998946308808" className="footer__link">
                                +998 94 630 8808
                            </a>
                        </li>
                    </ul>
                </Reveal>
                <Reveal className="footer__actions" delay={0.25} initial={{ opacity: 0, y: 24 }}>
                    <button type="button" className="footer__button" onClick={onViewWorks}>
                        {t("footer.cta")}
                    </button>
                    <button type="button" className="footer__button" onClick={onViewTeam}>
                        {t("footer.team")}
                    </button>
                </Reveal>
                <Reveal
                    className="footer__language"
                    delay={0.3}
                    initial={{ opacity: 0, y: 24 }}
                    aria-labelledby="footer-language-label"
                >
                    <span id="footer-language-label" className="footer__language-label">
                        {t("footer.language")}
                    </span>
                    <LanguageSwitcher />
                </Reveal>
            </div>
        </motion.footer>
    );
}
