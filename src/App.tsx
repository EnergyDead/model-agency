import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hero from "./components/Hero";
import SectionAbout from "./components/SectionAbout";
import SectionStamp from "./components/SectionStamp";
import SectionBillboard from "./components/SectionBillboard";
import SiteFooter from "./components/SiteFooter";
import WorksPage from "./components/WorksPage";
import TeamPage from "./components/TeamPage";
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

    const content = useMemo(() => {
        if (path === "/works") {
            return (
                <>
                    <WorksPage onNavigate={navigate} />
                    <SiteFooter
                        onViewWorks={() => navigate("/works")}
                        onViewTeam={() => navigate("/teams")}
                    />
                </>
            );
        }

        if (path === "/teams") {
            return (
                <>
                    <TeamPage onNavigate={navigate} />
                    <SiteFooter
                        onViewWorks={() => navigate("/works")}
                        onViewTeam={() => navigate("/teams")}
                    />
                </>
            );
        }

        return (
            <>
                <Hero onViewWorks={() => navigate("/works")} />
                <SectionAbout onViewTeam={() => navigate("/teams")} />
                <SectionStamp />
                <SectionBillboard />
                <SiteFooter
                    onViewWorks={() => navigate("/works")}
                    onViewTeam={() => navigate("/teams")}
                />
            </>
        );
    }, [navigate, path]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "contents" }}
            >
                {content}
            </motion.div>
        </AnimatePresence>
    );
}
