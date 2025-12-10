import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

export default function PoolPage() {
    const metrics = [
        { label: "Баланс пула", value: "12 345.67 USDT" },
        { label: "Участников", value: "42" },
        { label: "Цена unit", value: "1.07 USDT" },
        { label: "Доходность за 7 дней", value: "+3.4%", trend: "positive" },
        { label: "Доходность за 30 дней", value: "+12.1%", trend: "positive" },
    ];

    const events = [
        { type: "pnl", title: "+200 USDT — Доход по стратегии #1", time: "2 часа назад" },
        { type: "deposit", title: "+1 000 USDT — Крупный депозит", time: "вчера" },
        { type: "withdraw", title: "-500 USDT — Вывод средств", time: "2 дня назад" },
    ];

    return (
        <div className="page-shell">
            <SectionTitle
                eyebrow="Пул"
                title="Общий пул"
                subtitle="Агрегированная статистика. Данные обновляются регулярно."
            />

            <Card as="section" className="stat-wrapper">
                <div className="stat-grid">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="stat-card">
                            <p className="stat-card__label">{metric.label}</p>
                            <p
                                className={`stat-card__value ${
                                    metric.trend === "positive" ? "stat-card__value--positive" : ""
                                }`}
                            >
                                {metric.value}
                            </p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card as="section" className="chart-card" aria-label="Динамика пула">
                <div className="chart-card__header">
                    <div>
                        <h2 className="chart-card__title">Динамика пула</h2>
                        <p className="chart-card__subtitle">Условный график изменения стоимости юнита</p>
                    </div>
                    <span className="pill">Последние 30 дней</span>
                </div>
                <div className="pool-chart" aria-hidden>
                    {[28, 32, 31, 35, 40, 44, 46, 45, 48, 52, 55, 57].map((height, index) => (
                        <div key={index} className="pool-chart__bar" style={{ height: `${height}%` }} />
                    ))}
                    <div className="pool-chart__line" />
                </div>
                <div className="chart-card__legend">
                    <span className="chart-card__dot" />
                    <span>Рост стоимости unit</span>
                </div>
            </Card>

            <Card as="section" className="events-card" aria-label="Последние события пула">
                <div className="events-card__header">
                    <h2 className="events-card__title">Последние события пула</h2>
                    <span className="events-card__hint">Обновлено 5 минут назад</span>
                </div>
                <ul className="events-card__list">
                    {events.map((event) => (
                        <li key={event.title} className="event-row">
                            <div className={`event-row__icon event-row__icon--${event.type}`} aria-hidden>
                                {event.type === "pnl" && "↑"}
                                {event.type === "deposit" && "+"}
                                {event.type === "withdraw" && "-"}
                            </div>
                            <div className="event-row__body">
                                <p className="event-row__title">{event.title}</p>
                                <p className="event-row__time">{event.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
}
