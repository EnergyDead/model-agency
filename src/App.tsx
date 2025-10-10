import { useCallback, useEffect, useState } from "react";
import Hero from "./components/Hero";
import SectionAbout from "./components/SectionAbout";
import SectionStamp from "./components/SectionStamp";
import SectionBillboard from "./components/SectionBillboard";
import SiteFooter from "./components/SiteFooter";
import WorksPage from "./components/WorksPage";
import "./index.css";

export default function App() {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setPath(window.location.pathname);
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const navigate = useCallback((nextPath: string) => {
        if (window.location.pathname === nextPath) {
            return;
        }

        window.history.pushState({}, "", nextPath);
        setPath(nextPath);
    }, []);

    if (path === "/works") {
        return <WorksPage onNavigate={navigate} />;
    }

    return (
        <>
            <Hero onViewWorks={() => navigate("/works")} />
            <SectionAbout />
            <SectionStamp />
            <SectionBillboard />
            <SiteFooter onViewWorks={() => navigate("/works")} />
        </>
    );
}
