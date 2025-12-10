import { BrowserRouter, useRoutes } from "react-router-dom";
import "../index.css";
import { useTelegramTheme } from "../telegram/TelegramProvider";
import { routes } from "./routes";

function AppRoutes() {
    return useRoutes(routes);
}

export default function App() {
    const { resolvedTheme } = useTelegramTheme();

    return (
        <div style={{ background: resolvedTheme.background, color: resolvedTheme.text, minHeight: "100vh" }}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}
