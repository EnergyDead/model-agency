type PaginationBarProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const MAX_VISIBLE_PAGES = 5;

function getVisiblePages(currentPage: number, totalPages: number) {
    const halfWindow = Math.floor(MAX_VISIBLE_PAGES / 2);
    let start = Math.max(1, currentPage - halfWindow);
    let end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);

    start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export default function PaginationBar({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationBarProps) {
    const visiblePages = getVisiblePages(currentPage, totalPages);
    return (
        <nav className="pagination" aria-label="Pagination">
            <div className="pagination__controls">
                <button
                    className="pagination__button pagination__button--nav"
                    type="button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    aria-label="Previous page"
                >
                    Prev
                </button>
                <div className="pagination__pages" role="list">
                    {visiblePages.map((page) => (
                        <button
                            key={page}
                            className={`pagination__button ${
                                page === currentPage
                                    ? "pagination__button--active"
                                    : ""
                            }`}
                            type="button"
                            onClick={() => onPageChange(page)}
                            aria-current={page === currentPage ? "page" : undefined}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    className="pagination__button pagination__button--nav"
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Next page"
                >
                    Next
                </button>
            </div>
        </nav>
    );
}
