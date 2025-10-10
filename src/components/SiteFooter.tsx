import { useTranslation } from "../lib/i18n";
import "./SiteFooter.css";

type SiteFooterProps = {
    onViewWorks: () => void;
};

export default function SiteFooter({ onViewWorks }: SiteFooterProps) {
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
                            href="https://www.instagram.com/temp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @temp
                        </a>
                    </li>
                    <li>
                        <span className="footer__label">{t("footer.telegram")}</span>{" "}
                        <a href="https://t.me/srndpte" target="_blank" rel="noreferrer">
                            @temp
                        </a>
                    </li>
                </ul>
                <div className="footer__actions">
                    <button type="button" className="footer__button" onClick={onViewWorks}>
                        {t("footer.cta")}
                    </button>
                </div>
            </div>
        </footer>
    );
}
