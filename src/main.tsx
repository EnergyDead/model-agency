import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { TelegramProvider } from "./telegram/TelegramProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TelegramProvider>
            <App />
        </TelegramProvider>
    </StrictMode>,
);
