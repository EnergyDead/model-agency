import { useEffect } from "react";
import { useTranslation } from "../lib/i18n";
import "./WorksPage.css";
import workSet1Before from "../assets/work-2025-10-09-set1-before.jpg";
import workSet1After from "../assets/work-2025-10-09-set1-after.jpg";
import workSet2Before from "../assets/work-2025-10-09-set2-before.jpg";
import workSet2After from "../assets/work-2025-10-09-set2-after.jpg";
import workProcessDetail from "../assets/work-2025-10-09-process-detail.jpg";

type WorksPageProps = {
    onNavigate: (path: string) => void;
};

type VideoContent = {
    titleKey: string;
    descriptionKey: string;
    embedUrl: string;
};

const videos: VideoContent[] = [
    {
        titleKey: "works.videos.preparation.title",
        descriptionKey: "works.videos.preparation.description",
        embedUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    },
    {
        titleKey: "works.videos.technique.title",
        descriptionKey: "works.videos.technique.description",
        embedUrl: "https://player.vimeo.com/video/357274789?h=60f7ce2491",
    },
];

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
                    <p className="works__date">{t("works.first.date")}</p>
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
                    <p className="works__date">{t("works.second.date")}</p>
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

            <section className="works__section works__section--process" aria-labelledby="process-title">
                <div className="works__intro">
                    <p className="works__date">{t("works.process.date")}</p>
                    <h2 id="process-title" className="works__section-title">{t("works.process.title")}</h2>
                    <p className="works__description">{t("works.process.description")}</p>
                </div>
                <div className="works__process">
                    <img src={workProcessDetail} alt={t("works.processAlt") ?? ""} loading="lazy" />
                </div>
                <div className="works__videos" role="list">
                    {videos.map((video) => (
                        <article className="works__video" role="listitem" key={video.embedUrl}>
                            <div className="works__video-frame">
                                <iframe
                                    src={video.embedUrl}
                                    title={t(video.titleKey)}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            </div>
                            <h3 className="works__video-title">{t(video.titleKey)}</h3>
                            <p className="works__video-description">{t(video.descriptionKey)}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
