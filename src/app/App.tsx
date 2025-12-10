import { BrowserRouter, useRoutes } from "react-router-dom";
import "../index.css";
import { routes } from "./routes";

function AppRoutes() {
    return useRoutes(routes);
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
