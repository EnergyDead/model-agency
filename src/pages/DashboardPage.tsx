import BalanceCard from "../components/BalanceCard";
import PoolSummary from "../components/PoolSummary";
import QuickActions from "../components/QuickActions";

export default function DashboardPage() {
    return (
        <div className="dashboard-page">
            <BalanceCard />
            <QuickActions />
            <PoolSummary />
        </div>
    );
}
