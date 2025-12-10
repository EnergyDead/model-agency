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
        <section className="card pool-summary" aria-labelledby="pool-summary-title">
            <div className="pool-summary__header">
                <h2 id="pool-summary-title" className="pool-summary__title">
                    Сводка по пулу
                </h2>
                <span className="pool-summary__badge">Обновлено недавно</span>
            </div>
            <div className="pool-summary__grid">
                <div className="pool-summary__item">
                    <span className="pool-summary__label">Пул</span>
                    <span className="pool-summary__value">{total}</span>
                </div>
                <div className="pool-summary__item">
                    <span className="pool-summary__label">Участников</span>
                    <span className="pool-summary__value">{participants}</span>
                </div>
                <div className="pool-summary__item">
                    <span className="pool-summary__label">Доходность за 7 дней</span>
                    <span className="pool-summary__value pool-summary__value--positive">{weeklyYield}</span>
                </div>
            </div>
        </section>
    );
}
