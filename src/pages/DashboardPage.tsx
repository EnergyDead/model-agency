import BalanceCard from "../components/BalanceCard";
import PoolSummary from "../components/PoolSummary";
import QuickActions from "../components/QuickActions";
import SectionTitle from "../components/ui/SectionTitle";

export default function DashboardPage() {
    return (
        <div className="page-shell">
            <SectionTitle
                eyebrow="Главная"
                title="Сводка счёта"
                subtitle="Баланс, быстрые действия и показатели пула"
            />
            <div className="dashboard-grid">
                <BalanceCard />
                <QuickActions />
            </div>
            <PoolSummary />
        </div>
    );
}
