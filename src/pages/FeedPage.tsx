import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import PaginationBar from "../components/PaginationBar";
import { newsItems } from "../generated/newsIndex";

const PAGE_SIZE = 12;

type FeedNavigationState = {
    fromPage?: number;
    fromScrollY?: number;
};

export default function FeedPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const navigationState = location.state as FeedNavigationState | null;
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const rawPage = searchParams.get("page");
    const parsedPage = Number(rawPage);
    const totalPages = Math.max(1, Math.ceil(newsItems.length / PAGE_SIZE));
    const isValidPage =
        Number.isInteger(parsedPage) &&
        parsedPage >= 1 &&
        parsedPage <= totalPages;
    const currentPage = isValidPage ? parsedPage : 1;

    useEffect(() => {
        document.title = "genz sentry — News";
    }, []);

    useEffect(() => {
        if (!isValidPage || rawPage === null) {
            setSearchParams({ page: String(currentPage) }, { replace: true });
        }
    }, [currentPage, isValidPage, rawPage, setSearchParams]);

    useEffect(() => {
        if (!navigationState?.fromPage) {
            return;
        }

        const targetPage = Math.min(
            Math.max(navigationState.fromPage, 1),
            totalPages,
        );
        if (targetPage !== currentPage) {
            setSearchParams({ page: String(targetPage) }, { replace: true });
        }
    }, [currentPage, navigationState?.fromPage, setSearchParams, totalPages]);

    useLayoutEffect(() => {
        if (navigationState?.fromScrollY === undefined) {
            return;
        }

        if (listRef.current) {
            listRef.current.scrollTop = navigationState.fromScrollY;
        }
    }, [currentPage, navigationState?.fromScrollY]);

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
                    <div
                        className="feed-scroll"
                        ref={listRef}
                        onScroll={(event) =>
                            setScrollPosition(event.currentTarget.scrollTop)
                        }
                    >
                        <div className="feed-list" role="list">
                            {pageItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/news/${item.id}`}
                                    state={{
                                        fromPage: currentPage,
                                        fromScrollY: scrollPosition,
                                    }}
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
