import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/news" replace />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
