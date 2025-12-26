import { useMemo } from "react";
import { NewsItem } from "../lib/news";

type NewsReaderProps = {
    news: NewsItem;
    onClose: () => void;
    titleId: string;
};

export default function NewsReader({ news, onClose, titleId }: NewsReaderProps) {
    const paragraphs = useMemo(() => {
        if (!news.content) {
            return [];
        }

        return news.content
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean);
    }, [news.content]);

    return (
        <div className="news-reader">
            <div className="news-reader__topbar">
                <span className="news-reader__label">Read</span>
                <button
                    className="news-reader__close"
                    type="button"
                    aria-label="Close story"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
            <div className="divider" />
            <header>
                <h2 className="news-reader__title" id={titleId}>
                    {news.title}
                </h2>
                <div className="news-reader__meta">
                    <span>{news.category}</span>
                    {news.date && <span>{news.date}</span>}
                </div>
            </header>
            {news.image && (
                <div className="news-reader__image">
                    <img src={news.image} alt="" />
                </div>
            )}
            <div className="divider" />
            <div className="news-reader__content">
                {paragraphs.map((paragraph, index) => (
                    <p key={`${news.id}-${index}`} className="news-reader__paragraph">
                        {paragraph}
                    </p>
                ))}
            </div>
            {news.link && (
                <a
                    className="news-reader__cta"
                    href={news.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    Read Article
                </a>
            )}
        </div>
    );
}
