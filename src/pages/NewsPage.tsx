import { useMemo } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { newsItems } from "../generated/newsIndex";

type NewsContent = {
    title: string;
    date: string;
    summary: string;
    content: string;
};

type FeedNavigationState = {
    fromPage?: number;
    fromScrollY?: number;
};

const newsContentById = Object.fromEntries(
    Object.entries(
        import.meta.glob("../../news/*.json", { eager: true }),
    ).map(([path, data]) => {
        const match = path.match(/(\d+)\.json$/);
        return [Number(match?.[1]), data as NewsContent];
    }),
);

export default function NewsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const navigationState = location.state as FeedNavigationState | null;
    const newsId = Number(id);
    const newsItem = newsItems.find((item) => item.id === newsId);
    const newsContent = newsContentById[newsId];

    const paragraphs = useMemo(() => {
        if (!newsContent?.content) {
            return [] as string[];
        }

        return newsContent.content
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean);
    }, [newsContent?.content]);

    const handleBack = () => {
        if (navigationState?.fromPage) {
            navigate(`/?page=${navigationState.fromPage}`, {
                state: navigationState,
            });
            return;
        }

        navigate("/?page=1");
    };

    if (!newsItem) {
        return (
            <div className="app">
                <Header title="News" />
                <main className="content content--detail">
                    <div className="not-found">
                        <h2 className="not-found__title">404</h2>
                        <p className="not-found__text">
                            This news item was not found.
                        </p>
                        <Link className="back-button" to="/?page=1">
                            Back to feed
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="app">
            <Header title="News" />
            <main className="content content--detail">
                <button className="back-button" onClick={handleBack}>
                    Back
                </button>
                <article className="news-detail">
                    <header className="news-detail__header">
                        <h1 className="news-detail__title">{newsItem.title}</h1>
                        <p className="news-detail__date">{newsItem.date}</p>
                    </header>
                    <div className="news-detail__content">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={`${newsItem.id}-${index}`}
                                className="news-detail__paragraph"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
}
