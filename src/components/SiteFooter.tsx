import "./SiteFooter.css";

type SiteFooterProps = {
    onViewWorks: () => void;
};

export default function SiteFooter({ onViewWorks }: SiteFooterProps) {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__heading">контакты</div>
                <div className="footer__name">sérendipité.</div>
                <ul className="footer__list">
                    <li>
                        <span className="footer__label">Instagram:</span>{" "}
                        <a
                            href="https://www.instagram.com/temp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @temp
                        </a>
                    </li>
                    <li>
                        <span className="footer__label">Telegram:</span>{" "}
                        <a href="https://t.me/srndpte" target="_blank" rel="noreferrer">
                            @temp
                        </a>
                    </li>
                </ul>
                <div className="footer__actions">
                    <button type="button" className="footer__button" onClick={onViewWorks}>
                        Смотреть портфолио
                    </button>
                </div>
            </div>
        </footer>
    );
}
