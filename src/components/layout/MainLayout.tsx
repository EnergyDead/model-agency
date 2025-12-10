import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

export default function MainLayout() {
    return (
        <div className="main-layout">
            <TopBar />
            <main className="page-content">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
}
