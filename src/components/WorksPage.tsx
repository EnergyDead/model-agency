import { useEffect } from "react";
import "./WorksPage.css";
import workSet1Before from "../assets/work-2025-10-09-set1-before.jpg";
import workSet1After from "../assets/work-2025-10-09-set1-after.jpg";
import workSet2Before from "../assets/work-2025-10-09-set2-before.jpg";
import workSet2After from "../assets/work-2025-10-09-set2-after.jpg";
import workProcessDetail from "../assets/work-2025-10-09-process-detail.jpg";

type WorksPageProps = {
    onNavigate: (path: string) => void;
};

const videos = [
    {
        title: "Подготовка к процедуре",
        description: "Диагностика, обсуждение плана и подготовка препаратов.",
        embedUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    },
    {
        title: "Техника и контроль",
        description: "Реализация плана с акцентом на точность и безопасность.",
        embedUrl: "https://player.vimeo.com/video/357274789?h=60f7ce2491",
    },
];

export default function WorksPage({ onNavigate }: WorksPageProps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <main className="works">
            <header className="works__header">
                <button type="button" className="works__back" onClick={() => onNavigate("/")}>
                    ← Вернуться на главную
                </button>
                <div className="works__headline">
                    <p className="works__eyebrow">Портфолио</p>
                    <h1 className="works__title">Реальные результаты sérendipité</h1>
                    <p className="works__lead">
                        Каждая работа — это персональный план коррекции с сохранением естественных черт. Мы фиксируем стартовую точку, подбираем точные техники и отслеживаем динамику.
                    </p>
                </div>
            </header>

            <section className="works__section" aria-labelledby="set1-title">
                <div className="works__intro">
                    <p className="works__date">09 октября 2025</p>
                    <h2 id="set1-title" className="works__section-title">Структурная коррекция средней трети</h2>
                    <p className="works__description">
                        Лёгкое восполнение объёма скул и носогубного треугольника для улучшения опоры, освежения взгляда и выравнивания линий лица без эффекта перегруженности.
                    </p>
                </div>
                <div className="works__gallery">
                    <figure className="works__media">
                        <span className="works__badge works__badge--before">до</span>
                        <img src={workSet1Before} alt="Пациентка до коррекции средней трети" loading="lazy" />
                    </figure>
                    <figure className="works__media">
                        <span className="works__badge works__badge--after">после</span>
                        <img src={workSet1After} alt="Пациентка после коррекции средней трети" loading="lazy" />
                    </figure>
                </div>
            </section>

            <section className="works__section" aria-labelledby="set2-title">
                <div className="works__intro">
                    <p className="works__date">09 октября 2025</p>
                    <h2 id="set2-title" className="works__section-title">Баланс нижней трети и профиля</h2>
                    <p className="works__description">
                        Работа с контуром губ и подбородка для усиления профиля и чёткости овала. Использованы канюльные техники и мягкие филлеры для аккуратного результата.
                    </p>
                </div>
                <div className="works__gallery">
                    <figure className="works__media">
                        <span className="works__badge works__badge--before">до</span>
                        <img src={workSet2Before} alt="Пациентка до коррекции нижней трети" loading="lazy" />
                    </figure>
                    <figure className="works__media">
                        <span className="works__badge works__badge--after">после</span>
                        <img src={workSet2After} alt="Пациентка после коррекции нижней трети" loading="lazy" />
                    </figure>
                </div>
            </section>

            <section className="works__section works__section--process" aria-labelledby="process-title">
                <div className="works__intro">
                    <p className="works__date">Пошаговый подход</p>
                    <h2 id="process-title" className="works__section-title">Как мы работаем</h2>
                    <p className="works__description">
                        Сессия начинается с диагностики и 3D-оценки лица. На основании собранных данных формируем персональный протокол, обсуждаем этапы и ожидаемый результат, фиксируем пост-уход.
                    </p>
                </div>
                <div className="works__process">
                    <img src={workProcessDetail} alt="Процесс процедуры в клинике sérendipité" loading="lazy" />
                </div>
                <div className="works__videos" role="list">
                    {videos.map((video) => (
                        <article className="works__video" role="listitem" key={video.embedUrl}>
                            <div className="works__video-frame">
                                <iframe
                                    src={video.embedUrl}
                                    title={video.title}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            </div>
                            <h3 className="works__video-title">{video.title}</h3>
                            <p className="works__video-description">{video.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
