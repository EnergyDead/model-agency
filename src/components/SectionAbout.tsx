import "./SectionAbout.css";
import feruza from "../assets/feruza.png"; // замените на актуальное фото

export default function SectionAbout() {
    return (
        <section className="about about--dark">
            <div className="about__inner">
                <div className="about__photo">
                    <img src={feruza} alt="Dr. Ashurova Feruza" />
                </div>

                <div className="about__content">
                    <h2 className="about__title">Dr. Ashurova Feruza, MD</h2>

                    <p className="about__subtitle">PURE & PRECISE.</p>

                    <p className="about__text">
                        Dr. Ashurova Feruza is an aesthetic physician from Central Asia known for measured, natural results.
                        Her approach combines medical diagnostics with careful technique to enhance features without overcorrection.
                    </p>

                    <div className="about__list">
                        <p>• Board-certified physician with 10+ years in clinical and aesthetic medicine</p>
                        <p>• Personalized injection planning (botulinum toxin, HA fillers, collagen stimulators)</p>
                        <p>• Skin quality protocols: biorevitalization, PRP/PRF, medical peels</p>
                        <p>• Focus on facial balance, safety, and transparent aftercare</p>
                    </div>

                    <div className="about__cta">
                        <a href="#booking" className="about__button">
                            Book a Consultation
                        </a>
                        <p className="about__note">
                            By appointment only — New York & Tashkent
                        </p>
                        <p className="about__micro">
                            Each consultation begins with diagnostics, not trends. Every plan — personal, safe, and precise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
