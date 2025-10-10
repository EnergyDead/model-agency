import { useEffect } from "react";
import { useTranslation } from "../lib/i18n";
import "./WorksPage.css";
import workSet1Before from "../assets/work-2025-10-09-set1-before.jpg";
import workSet1After from "../assets/work-2025-10-09-set1-after.jpg";
import workSet2Before from "../assets/work-2025-10-09-set2-before.jpg";
import workSet2After from "../assets/work-2025-10-09-set2-after.jpg";
import workVideo1 from "../assets/IMG_6271.MOV";
import workVideo2 from "../assets/IMG_6285.MOV";

type WorksPageProps = {
    onNavigate: (path: string) => void;
};
export default function WorksPage({ onNavigate }: WorksPageProps) {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <main className="works">
            <header className="works__header">
                <button type="button" className="works__back" onClick={() => onNavigate("/")}>
                    {t("works.back")}
                </button>
                <div className="works__headline">
                    <p className="works__eyebrow">{t("works.eyebrow")}</p>
                    <h1 className="works__title">{t("works.title")}</h1>
                    <p className="works__lead">{t("works.lead")}</p>
                </div>
            </header>

            <section className="works__section" aria-labelledby="set1-title">
                <div className="works__intro">
                    <h2 id="set1-title" className="works__section-title">{t("works.first.title")}</h2>
                    <p className="works__description">{t("works.first.description")}</p>
                </div>
                <div className="works__gallery">
                    <figure className="works__media">
                        <span className="works__badge works__badge--before">{t("works.badges.before")}</span>
                        <img src={workSet1Before} alt={t("works.first.beforeAlt") ?? ""} loading="lazy" />
                    </figure>
                    <figure className="works__media">
                        <span className="works__badge works__badge--after">{t("works.badges.after")}</span>
                        <img src={workSet1After} alt={t("works.first.afterAlt") ?? ""} loading="lazy" />
                    </figure>
                </div>
            </section>

            <section className="works__section" aria-labelledby="set2-title">
                <div className="works__intro">
                    <h2 id="set2-title" className="works__section-title">{t("works.second.title")}</h2>
                    <p className="works__description">{t("works.second.description")}</p>
                </div>
                <div className="works__gallery">
                    <figure className="works__media">
                        <span className="works__badge works__badge--before">{t("works.badges.before")}</span>
                        <img src={workSet2Before} alt={t("works.second.beforeAlt") ?? ""} loading="lazy" />
                    </figure>
                    <figure className="works__media">
                        <span className="works__badge works__badge--after">{t("works.badges.after")}</span>
                        <img src={workSet2After} alt={t("works.second.afterAlt") ?? ""} loading="lazy" />
                    </figure>
                </div>
            </section>
            <section className="works__section works__section--final">
                <div className="works__intro">
                    <h2 className="works__section-title">{t("works.final.title")}</h2>
                    <p className="works__description">{t("works.final.description")}</p>
                </div>
                <div className="works__videos works__videos--local">
                    <video
                        src={workVideo1}
                        className="works__video-file"
                        controls
                        playsInline
                        preload="metadata"
                    />
                    <video
                        src={workVideo2}
                        className="works__video-file"
                        controls
                        playsInline
                        preload="metadata"
                    />
                </div>
            </section>
        </main>
    );
}
