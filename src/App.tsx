import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import NewsPage from "./pages/NewsPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
