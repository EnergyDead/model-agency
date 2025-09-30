import "./SiteFooter.css";

export default function SiteFooter() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner">
                <ul className="footer__list">
                    <li><span className="footer__label">Instagram:</span> <a href="https://instagram.com/julidesignco"
                                                                             target="_blank"
                                                                             rel="noreferrer">@julidesignco</a></li>
                    <li><span className="footer__label">Telegram:</span> <a href="https://dribbble.com/juliDesignCo"
                                                                            target="_blank"
                                                                            rel="noreferrer">juliDesignCo</a></li>
                    <li><span className="footer__label">Gmail:</span> <a
                        href="mailto:julahrabwork@gmail.com">julahrabwork@gmail.com</a></li>

                    <div className="footer__name">sérendipité.</div>
                </ul>
            </div>
        </footer>
    );
}
