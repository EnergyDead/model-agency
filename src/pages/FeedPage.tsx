import Header from "../components/Header";
import PaginationBar from "../components/PaginationBar";

export default function FeedPage() {
    return (
        <div className="app">
            <Header title="News" />
            <main className="content">
                <p className="placeholder">News feed is ready</p>
            </main>
            <PaginationBar currentPage={1} totalPages={1} />
        </div>
    );
}
