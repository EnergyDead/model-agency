import { useTranslation } from "../lib/i18n";
import "./SectionAbout.css";
import clinicInterior from "../assets/billboard-3.jpg";

type SectionAboutProps = {
    onViewTeam: () => void;
};

export default function SectionAbout({ onViewTeam }: SectionAboutProps) {
    const { t } = useTranslation();
    const listItems = t("about.list", { returnObjects: true }) as string[];

    return (
        <section className="about about--dark">
            <div className="about__inner">
                <div className="about__photo">
                    <img src={clinicInterior} alt={t("about.photoAlt") ?? ""} />
                </div>

                <div className="about__content">
                    <h2 className="about__title">{t("about.title")}</h2>

                    <p className="about__subtitle">{t("about.subtitle")}</p>

                    <p className="about__text">{t("about.description")}</p>

                    <div className="about__list">
                        {listItems.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>

                    <div className="about__cta">
                        <button type="button" className="about__button" onClick={onViewTeam}>
                            {t("about.button")}
                        </button>
                        <p className="about__note">{t("about.note")}</p>
                        <p className="about__micro">{t("about.microcopy")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
