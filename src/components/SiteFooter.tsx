import "./SiteFooter.css";

export default function SiteFooter() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner">
                <ul className="footer__list">
                    <li><span className="footer__label">Instagram:</span> <a href="https://www.instagram.com/serendipite.art"
                                                                             target="_blank"
                                                                             rel="noreferrer">@serendipite.art</a></li>
                    <li><span className="footer__label">Telegram:</span> <a href="https://t.me/srndpte"
                                                                            target="_blank"
                                                                            rel="noreferrer">@srndpte</a></li>
                    <li><span className="footer__label">Gmail:</span> <a
                        href="mailto:temp@gmail.com">temp@gmail.com</a></li>

                    <div className="footer__name">sérendipité.</div>
                </ul>
            </div>
        </footer>
    );
}
