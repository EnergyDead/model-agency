type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

function getVisiblePages(currentPage: number, totalPages: number) {
    const pages: number[] = [];
    const windowSize = 5;
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + windowSize - 1);

    for (let page = start; page <= end; page += 1) {
        pages.push(page);
    }

    return pages;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages = getVisiblePages(currentPage, totalPages);

    return (
        <nav className="pagination" aria-label="Pagination">
            <button
                type="button"
                className="pagination__button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    className={`pagination__button ${
                        page === currentPage ? "pagination__button--active" : ""
                    }`}
                    onClick={() => onPageChange(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                >
                    {page}
                </button>
            ))}
            <button
                type="button"
                className="pagination__button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                Next
            </button>
        </nav>
    );
}
