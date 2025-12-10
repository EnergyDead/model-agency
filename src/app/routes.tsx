import DashboardPage from "../pages/DashboardPage";
import DepositPage from "../pages/DepositPage";
import WithdrawPage from "../pages/WithdrawPage";
import HistoryPage from "../pages/HistoryPage";
import PoolPage from "../pages/PoolPage";

export const routes = [
    { path: "/", element: <DashboardPage /> },
    { path: "/deposit", element: <DepositPage /> },
    { path: "/withdraw", element: <WithdrawPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/pool", element: <PoolPage /> },
];
