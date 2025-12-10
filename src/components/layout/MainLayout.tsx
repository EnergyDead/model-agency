import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout">
            <TopBar />
            <main className="page-content">{children}</main>
            <BottomNav />
        </div>
    );
}
