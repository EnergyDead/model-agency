import { useEffect } from "react";
import { HashRouter, useRoutes } from "react-router-dom";
import "../index.css";
import { useTelegramTheme } from "../telegram/TelegramProvider";
import { routes } from "./routes";

declare global {
    interface Window {
        Telegram?: {
            WebApp: any;
        };
    }
}

function AppRoutes() {
    return useRoutes(routes);
}

export default function App() {
    const { resolvedTheme } = useTelegramTheme();

    useEffect(() => {
        const tg = window?.Telegram?.WebApp;
        if (tg) {
            tg.ready();
            tg.expand();
        }
    }, []);

    return (
        <div
            style={{
                background: resolvedTheme.background,
                color: resolvedTheme.text,
                minHeight: "100vh",
            }}
        >
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </div>
    );
}
