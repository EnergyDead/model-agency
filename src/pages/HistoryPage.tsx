import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

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
        <div className="page-shell">
            <SectionTitle
                eyebrow="Данные"
                title="История операций"
                subtitle="Быстрый обзор депозитов, выводов и начислений"
            />

            <Card as="section" className="filter-card" aria-label="Фильтры истории">
                <div className="filter-grid">
                    <div className="form-field">
                        <label className="form-field__label" htmlFor="type-filter">
                            Тип операции
                        </label>
                        <select id="type-filter" className="form-field__input">
                            <option value="all">Все</option>
                            <option value="deposit">Депозиты</option>
                            <option value="withdraw">Выводы</option>
                            <option value="income">Доход</option>
                            <option value="fee">Комиссии</option>
                        </select>
                    </div>

                    <div className="filter-period">
                        <span className="form-field__label">Период</span>
                        <div className="pill-group">
                            <button type="button" className="pill pill--interactive pill--active">
                                7 дней
                            </button>
                            <button type="button" className="pill pill--interactive">30 дней</button>
                        </div>
                    </div>

                    <Button type="button" variant="ghost" className="filter-reset">
                        Сбросить
                    </Button>
                </div>
            </Card>

            <Card as="section" className="history-card" aria-label="Список операций">
                <SectionTitle
                    title="Последние операции"
                    subtitle="Данные обновятся после подключения API"
                    size="md"
                    as="h2"
                    align="left"
                />

                <div className="timeline" role="list">
                    {operations.map((operation) => {
                        const meta = operationTypeMeta[operation.type];
                        const isPositive = meta.tone === "positive";
                        const amountPrefix = isPositive ? "+" : "−";

                        return (
                            <article key={operation.id} className="timeline__item" role="listitem">
                                <div className="timeline__badge" aria-hidden />
                                <div className="timeline__content">
                                    <div className="timeline__row">
                                        <div className="timeline__labels">
                                            <span className={`badge badge--${meta.accent}`}>{meta.label}</span>
                                            <span className="timeline__datetime">{operation.datetime}</span>
                                        </div>
                                        <div className={`timeline__amount timeline__amount--${meta.tone}`}>
                                            <span className="timeline__value">
                                                {amountPrefix}
                                                {operation.amount}
                                            </span>
                                            <span className="timeline__currency">USDT</span>
                                        </div>
                                    </div>
                                    <p className="timeline__comment">{operation.comment}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
