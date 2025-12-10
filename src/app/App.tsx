import "../index.css";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";

export default function App() {
    return (
        <MainLayout>
            <DashboardPage />
        </MainLayout>
    );
}
