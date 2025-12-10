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
        <div className="pool-page">
            <header className="pool-header">
                <div>
                    <p className="pool-header__eyebrow">Пул фонда</p>
                    <h1 className="pool-header__title">Общий пул</h1>
                    <p className="pool-header__subtitle">
                        Агрегированная статистика по состоянию пула. Данные обновляются регулярно.
                    </p>
                </div>
                <div className="pool-header__badge">Статус: Активен</div>
            </header>

            <section className="pool-metrics" aria-label="Основные показатели пула">
                {metrics.map((metric) => (
                    <article key={metric.label} className="card pool-metric">
                        <p className="pool-metric__label">{metric.label}</p>
                        <p
                            className={`pool-metric__value ${
                                metric.trend === "positive" ? "pool-metric__value--positive" : ""
                            }`}
                        >
                            {metric.value}
                        </p>
                    </article>
                ))}
            </section>

            <section className="card pool-activity" aria-label="Динамика пула">
                <div className="pool-activity__header">
                    <div>
                        <h2 className="pool-activity__title">Динамика пула</h2>
                        <p className="pool-activity__subtitle">Условный график изменения стоимости юнита</p>
                    </div>
                    <span className="pool-activity__period">Последние 30 дней</span>
                </div>
                <div className="pool-chart" aria-hidden>
                    {[28, 32, 31, 35, 40, 44, 46, 45, 48, 52, 55, 57].map((height, index) => (
                        <div key={index} className="pool-chart__bar" style={{ height: `${height}%` }} />
                    ))}
                    <div className="pool-chart__line" />
                </div>
                <div className="pool-activity__legend">
                    <span className="pool-activity__legend-dot" />
                    <span>Рост стоимости unit</span>
                </div>
            </section>

            <section className="card pool-events" aria-label="Последние события пула">
                <div className="pool-events__header">
                    <h2 className="pool-events__title">Последние события пула</h2>
                    <span className="pool-events__hint">Обновлено 5 минут назад</span>
                </div>
                <ul className="pool-events__list">
                    {events.map((event) => (
                        <li key={event.title} className="pool-event">
                            <div className={`pool-event__icon pool-event__icon--${event.type}`} aria-hidden>
                                {event.type === "pnl" && "↑"}
                                {event.type === "deposit" && "+"}
                                {event.type === "withdraw" && "-"}
                            </div>
                            <div className="pool-event__body">
                                <p className="pool-event__title">{event.title}</p>
                                <p className="pool-event__time">{event.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
