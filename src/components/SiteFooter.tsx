import { useTranslation } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import "./SiteFooter.css";

type SiteFooterProps = {
    onViewWorks: () => void;
    onViewTeam: () => void;
};

export default function SiteFooter({ onViewWorks, onViewTeam }: SiteFooterProps) {
    const { t } = useTranslation();

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__heading">{t("footer.heading")}</div>
                <div className="footer__name">{t("footer.name")}</div>
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
                <div className="footer__actions">
                    <button type="button" className="footer__button" onClick={onViewWorks}>
                        {t("footer.cta")}
                    </button>
                    <button type="button" className="footer__button" onClick={onViewTeam}>
                        {t("footer.team")}
                    </button>
                </div>
                <div className="footer__language" aria-labelledby="footer-language-label">
                    <span id="footer-language-label" className="footer__language-label">
                        {t("footer.language")}
                    </span>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}
