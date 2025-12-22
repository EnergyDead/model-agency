import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import PaginationBar from "../components/PaginationBar";
import { newsItems } from "../generated/newsIndex";

const PAGE_SIZE = 12;

export default function FeedPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const rawPage = searchParams.get("page");
    const parsedPage = Number(rawPage);
    const totalPages = Math.max(1, Math.ceil(newsItems.length / PAGE_SIZE));
    const isValidPage =
        Number.isInteger(parsedPage) &&
        parsedPage >= 1 &&
        parsedPage <= totalPages;
    const currentPage = isValidPage ? parsedPage : 1;

    useEffect(() => {
        if (!isValidPage || rawPage === null) {
            setSearchParams({ page: String(currentPage) }, { replace: true });
        }
    }, [currentPage, isValidPage, rawPage, setSearchParams]);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const pageItems = newsItems.slice(startIndex, startIndex + PAGE_SIZE);

    const handlePageChange = (page: number) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        setSearchParams({ page: String(nextPage) });
    };

    return (
        <div className="app">
            <Header title="News" />
            <main className="content">
                {newsItems.length === 0 ? (
                    <p className="placeholder">No news yet</p>
                ) : (
                    <div className="feed-list" role="list">
                        {pageItems.map((item) => (
                            <Link
                                key={item.id}
                                to={`/news/${item.id}`}
                                className="news-card"
                                role="listitem"
                            >
                                <div className="news-card__content">
                                    <div>
                                        <p className="news-card__date">
                                            {item.date}
                                        </p>
                                        <h2 className="news-card__title">
                                            {item.title}
                                        </h2>
                                        <p className="news-card__summary">
                                            {item.summary}
                                        </p>
                                    </div>
                                    <span className="news-card__read">
                                        Read →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
            <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
