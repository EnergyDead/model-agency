import { useEffect, useMemo, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CaseCard from "../components/CaseCard";
import Drawer from "../components/Drawer";
import NewsReader from "../components/NewsReader";
import Pagination from "../components/Pagination";
import { findNewsById, loadAllNews } from "../lib/news";

const PAGE_SIZE = 9;

export default function NewsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const scrollSnapshot = useRef(0);
    const wasDrawerOpen = useRef(false);

    const allNews = useMemo(() => loadAllNews(), []);

    const rawPage = searchParams.get("page");
    const parsedPage = Number(rawPage);
    const totalPages = Math.max(1, Math.ceil(allNews.length / PAGE_SIZE));
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
    const pageItems = allNews.slice(startIndex, startIndex + PAGE_SIZE);

    const selectedId = id ? Number(id) : undefined;
    const selectedNews =
        selectedId && Number.isFinite(selectedId)
            ? findNewsById(selectedId)
            : undefined;
    const isDrawerOpen = Boolean(selectedNews);
    const readerTitleId = selectedNews ? `news-title-${selectedNews.id}` : "";

    useEffect(() => {
        if (isDrawerOpen) {
            scrollSnapshot.current = window.scrollY;
        }
    }, [isDrawerOpen]);

    useEffect(() => {
        if (!isDrawerOpen && wasDrawerOpen.current) {
            window.requestAnimationFrame(() => {
                window.scrollTo({ top: scrollSnapshot.current });
            });
        }
        wasDrawerOpen.current = isDrawerOpen;
    }, [isDrawerOpen]);

    useEffect(() => {
        if (id && !selectedNews) {
            navigate(`/news?page=${currentPage}`, { replace: true });
        }
    }, [currentPage, id, navigate, selectedNews]);

    useEffect(() => {
        if (selectedNews) {
            document.title = `${selectedNews.title} — News`;
            return;
        }
        document.title = "News — genz sentry";
    }, [selectedNews]);

    const handleSelect = (newsId: number) => {
        navigate(`/news/${newsId}?page=${currentPage}`);
    };

    const handleClose = () => {
        navigate(`/news?page=${currentPage}`);
    };

    const handlePageChange = (page: number) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        setSearchParams({ page: String(nextPage) });
        if (selectedNews) {
            navigate(`/news/${selectedNews.id}?page=${nextPage}`, {
                replace: true,
            });
        }
    };

    return (
        <div className="page">
            <div className="page__container">
                <header className="page__hero">
                    <p className="hero__eyebrow">Curated Stories</p>
                    <h1 className="hero__title">News</h1>
                    <p className="hero__subtitle">
                        Field reports, releases, and stories that shape our work.
                        Explore the feed and open any piece to read without leaving
                        the stream.
                    </p>
                </header>

                <section className="news-layout">
                    <div className="news-grid">
                        {pageItems.map((item) => (
                            <CaseCard key={item.id} item={item} onSelect={handleSelect} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </section>
            </div>

            <Drawer open={isDrawerOpen} onClose={handleClose} ariaTitleId={readerTitleId}>
                {selectedNews && (
                    <NewsReader news={selectedNews} onClose={handleClose} titleId={readerTitleId} />
                )}
            </Drawer>
        </div>
    );
}
