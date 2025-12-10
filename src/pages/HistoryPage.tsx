const operations = [
    {
        id: "1",
        datetime: "15.05.2024, 12:34",
        type: "deposit",
        amount: 250,
        comment: "Пополнение через Telegram Wallet",
    },
    {
        id: "2",
        datetime: "14.05.2024, 19:10",
        type: "income",
        amount: 42.5,
        comment: "PnL за день",
    },
    {
        id: "3",
        datetime: "14.05.2024, 08:22",
        type: "withdraw",
        amount: 120,
        comment: "Вывод на адрес 0x92d7...c10d",
    },
    {
        id: "4",
        datetime: "13.05.2024, 17:40",
        type: "fee",
        amount: 6.75,
        comment: "Комиссия пула",
    },
    {
        id: "5",
        datetime: "12.05.2024, 09:18",
        type: "deposit",
        amount: 500,
        comment: "Депозит через карту",
    },
];

const operationTypeMeta: Record<
    (typeof operations)[number]["type"],
    { label: string; tone: "positive" | "negative"; accent: string }
> = {
    deposit: { label: "Депозит", tone: "positive", accent: "blue" },
    withdraw: { label: "Вывод", tone: "negative", accent: "amber" },
    income: { label: "Доход", tone: "positive", accent: "green" },
    fee: { label: "Комиссия", tone: "negative", accent: "red" },
};

export default function HistoryPage() {
    return (
        <div className="history-page">
            <header className="history-header">
                <h1 className="history-title">История операций</h1>
                <p className="history-subtitle">
                    Быстрый обзор депозитов, выводов и начислений по вашему счету
                </p>
            </header>

            <section className="card history-filters" aria-label="Фильтры истории">
                <div className="history-filters__group">
                    <label className="history-filters__label" htmlFor="type-filter">
                        Тип операции
                    </label>
                    <select id="type-filter" className="history-filters__select" defaultValue="all">
                        <option value="all">Все</option>
                        <option value="deposit">Депозиты</option>
                        <option value="withdraw">Выводы</option>
                        <option value="income">Доход</option>
                        <option value="fee">Комиссии</option>
                    </select>
                </div>

                <div className="history-filters__group">
                    <span className="history-filters__label">Период</span>
                    <div className="history-period">
                        <button type="button" className="history-period__button history-period__button--active">
                            7 дней
                        </button>
                        <button type="button" className="history-period__button">
                            30 дней
                        </button>
                    </div>
                </div>
            </section>

            <section className="card history-card" aria-label="Список операций">
                <div className="history-card__header">
                    <h2 className="history-card__title">Последние операции</h2>
                    <span className="history-card__hint">Данные обновятся после подключения API</span>
                </div>

                <div className="history-timeline" role="list">
                    {operations.map((operation) => {
                        const meta = operationTypeMeta[operation.type];
                        const isPositive = meta.tone === "positive";
                        const amountPrefix = isPositive ? "+" : "−";

                        return (
                            <article key={operation.id} className="history-item" role="listitem">
                                <div className="history-item__indicator" aria-hidden="true" />
                                <div className="history-item__content">
                                    <div className="history-item__row">
                                        <div className="history-item__type-group">
                                            <span
                                                className={`history-item__type history-item__type--${meta.accent}`}
                                                aria-label={`Тип: ${meta.label}`}
                                            >
                                                {meta.label}
                                            </span>
                                            <span className="history-item__datetime">{operation.datetime}</span>
                                        </div>
                                        <div
                                            className={`history-item__amount history-item__amount--${meta.tone}`}
                                            aria-label={`Сумма: ${amountPrefix}${operation.amount} USDT`}
                                        >
                                            <span className="history-item__amount-value">
                                                {amountPrefix}
                                                {operation.amount}
                                            </span>
                                            <span className="history-item__currency">USDT</span>
                                        </div>
                                    </div>
                                    <p className="history-item__comment">{operation.comment}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
