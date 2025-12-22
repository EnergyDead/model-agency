type PaginationBarProps = {
    currentPage: number;
    totalPages: number;
};

export default function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
    return (
        <nav className="pagination" aria-label="Pagination">
            <span className="pagination__text">
                Page {currentPage} of {totalPages}
            </span>
        </nav>
    );
}
