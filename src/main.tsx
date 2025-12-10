import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { TelegramProvider, type TelegramWebApp } from "./telegram/TelegramProvider";

const telegramWebApp = (window as unknown as { Telegram?: { WebApp?: TelegramWebApp } }).Telegram?.WebApp;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TelegramProvider webApp={telegramWebApp}>
            <App />
        </TelegramProvider>
    </StrictMode>,
);
