import { useTranslation } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import "./SiteFooter.css";

type SiteFooterProps = {
    onViewWorks: () => void;
    onViewTeam: () => void;
};

export default function SiteFooter({ onViewWorks, onViewTeam }: SiteFooterProps) {
    const { t } = useTranslation();
    const phoneDisplay = "+998 94 630 8808";
    const phoneTel = "+998946308808";
    const instagramHandle = "@bella_cosa_kosmetolog";
    const instagramUrl = "https://www.instagram.com/bella_cosa_kosmetolog";
    const emailAddress = "concierge@serendipite.clinic";
    const currentYear = new Date().getFullYear();
    const footerCopy = t<string>("footer.bottom").replace("{{year}}", currentYear.toString());

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__headline">
                    <div className="footer__brand">
                        <span className="footer__heading">{t("footer.heading")}</span>
                        <span className="footer__name">{t("footer.name")}</span>
                        <p className="footer__tagline">{t("footer.tagline")}</p>
                    </div>
                    <div className="footer__cta-group">
                        <button type="button" className="footer__button" onClick={onViewWorks}>
                            {t("footer.cta")}
                        </button>
                        <button type="button" className="footer__button" onClick={onViewTeam}>
                            {t("footer.team")}
                        </button>
                    </div>
                </div>
                <div className="footer__divider" aria-hidden="true" />
                <div className="footer__grid">
                    <div className="footer__column">
                        <span className="footer__column-title">{t("footer.address.title")}</span>
                        <address className="footer__address">
                            <span>{t("footer.address.line1")}</span>
                            <span>{t("footer.address.line2")}</span>
                        </address>
                        <a
                            className="footer__link"
                            href="https://maps.app.goo.gl/V75CHTMx2zMEyBtj9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("footer.address.map")}
                        </a>
                    </div>
                    <div className="footer__column">
                        <span className="footer__column-title">{t("footer.contacts.title")}</span>
                        <div className="footer__contact-list">
                            <a className="footer__contact" href={`tel:${phoneTel}`}>
                                <span className="footer__contact-label">{t("footer.contacts.phoneLabel")}</span>
                                <span className="footer__contact-value">{phoneDisplay}</span>
                            </a>
                            <a className="footer__contact" href={`mailto:${emailAddress}`}>
                                <span className="footer__contact-label">{t("footer.contacts.emailLabel")}</span>
                                <span className="footer__contact-value">{emailAddress}</span>
                            </a>
                            <a className="footer__contact" href={instagramUrl} target="_blank" rel="noreferrer">
                                <span className="footer__contact-label">{t("footer.contacts.socialLabel")}</span>
                                <span className="footer__contact-value">{instagramHandle}</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer__column">
                        <span className="footer__column-title">{t("footer.hours.title")}</span>
                        <ul className="footer__hours">
                            <li>{t("footer.hours.slot1")}</li>
                            <li>{t("footer.hours.slot2")}</li>
                            <li className="footer__hours-note">{t("footer.hours.note")}</li>
                        </ul>
                        <div className="footer__timezone">{t("footer.hours.timezone")}</div>
                        <div className="footer__language" aria-labelledby="footer-language-label">
                            <span id="footer-language-label" className="footer__language-label">
                                {t("footer.language")}
                            </span>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="footer__copy">{footerCopy}</span>
                </div>
            </div>
        </footer>
    );
}
