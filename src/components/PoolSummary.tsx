import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

interface PoolSummaryProps {
    total?: string;
    participants?: number;
    weeklyYield?: string;
}

export default function PoolSummary({
    total = "12 345.67 USDT",
    participants = 42,
    weeklyYield = "+3.4%",
}: PoolSummaryProps) {
    return (
        <Card as="section" className="pool-summary" aria-labelledby="pool-summary-title">
            <SectionTitle
                title="Сводка по пулу"
                subtitle="Краткие метрики по вашему участию"
                size="md"
                as="h2"
                align="left"
                actions={<span className="pill pill--success">Обновлено недавно</span>}
            />
            <div className="stat-grid">
                <div className="stat-card">
                    <span className="stat-card__label">Пул</span>
                    <span className="stat-card__value">{total}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-card__label">Участников</span>
                    <span className="stat-card__value">{participants}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-card__label">Доходность за 7 дней</span>
                    <span className="stat-card__value stat-card__value--positive">{weeklyYield}</span>
                </div>
            </div>
        </Card>
    );
}
