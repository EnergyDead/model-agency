import type { KeyboardEvent } from "react";
import { NewsItem } from "../lib/news";

type CaseCardProps = {
    item: NewsItem;
    onSelect: (id: number) => void;
};

export default function CaseCard({ item, onSelect }: CaseCardProps) {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(item.id);
        }
    };

    return (
        <article
            className="case-card"
            onClick={() => onSelect(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label={`Read story ${item.title}`}
        >
            {item.image && (
                <div className="case-card__media">
                    <img
                        className="case-card__image"
                        src={item.image}
                        alt=""
                        loading="lazy"
                    />
                </div>
            )}
            <div className="case-card__meta">
                <span>{item.category}</span>
                {item.date && <span>{item.date}</span>}
            </div>
            <h2 className="case-card__title clamp-2">{item.title}</h2>
            <p className="case-card__excerpt clamp-3">{item.excerpt}</p>
            <div className="case-card__footer">
                <span className="case-card__cta">Read Story</span>
                {item.source && (
                    <span className="case-card__source">{item.source}</span>
                )}
            </div>
        </article>
    );
}
