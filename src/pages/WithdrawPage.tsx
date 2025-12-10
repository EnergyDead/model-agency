import { useMemo, useState } from "react";

type WithdrawHistoryItem = {
    id: string;
    date: string;
    amount: string;
    status: "В обработке" | "Успешно" | "Отклонено";
};

const historyStatusClassMap: Record<WithdrawHistoryItem["status"], string> = {
    "В обработке": "processing",
    Успешно: "success",
    Отклонено: "declined",
};

export default function WithdrawPage() {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    const currentBalance = "1 234.56";
    const maxAvailable = "1 000.00";

    const lastWithdrawals = useMemo<WithdrawHistoryItem[]>(
        () => [
            { id: "1", date: "12.05.2024", amount: "150", status: "Успешно" },
            { id: "2", date: "10.05.2024", amount: "200", status: "В обработке" },
            { id: "3", date: "08.05.2024", amount: "75", status: "Отклонено" },
        ],
        [],
    );

    const handleCreateWithdraw = () => {
        const normalizedAmount = amount.trim() || "0";
        const normalizedAddress = address.trim() || "(без адреса)";
        // TODO: integrate with real API when backend is ready
        console.log(`Создать вывод на ${normalizedAmount} USDT`, {
            address: normalizedAddress,
        });
    };

    return (
        <div className="withdraw-page">
            <header className="withdraw-header">
                <h1 className="withdraw-title">Вывод средств</h1>
                <p className="withdraw-subtitle">Переведите заработанные средства в удобный кошелек</p>
            </header>

            <section className="card withdraw-card withdraw-balance-card" aria-label="Текущий баланс и доступный вывод">
                <div className="withdraw-balance">
                    <div className="withdraw-card__label">Текущий баланс</div>
                    <div className="withdraw-card__value">
                        <span className="withdraw-card__amount">{currentBalance}</span>
                        <span className="withdraw-card__currency">USDT</span>
                    </div>
                </div>
                <div className="withdraw-available">
                    <div className="withdraw-card__label">Доступно к выводу</div>
                    <div className="withdraw-card__value">
                        <span className="withdraw-card__amount">{maxAvailable}</span>
                        <span className="withdraw-card__currency">USDT</span>
                    </div>
                </div>
            </section>

            <section className="card withdraw-card" aria-label="Форма вывода">
                <div className="withdraw-card__content">
                    <label className="withdraw-field">
                        <span className="withdraw-field__label">Сумма вывода</span>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Сумма в USDT"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            className="withdraw-field__input"
                            inputMode="decimal"
                        />
                    </label>

                    <label className="withdraw-field">
                        <span className="withdraw-field__label">Адрес для получения (опционально)</span>
                        <input
                            type="text"
                            placeholder="Адрес кошелька / TG Wallet"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            className="withdraw-field__input"
                        />
                    </label>

                    <button type="button" className="withdraw-action" onClick={handleCreateWithdraw}>
                        Создать заявку на вывод
                    </button>
                </div>

                <div className="withdraw-info" aria-label="Информация о выводе">
                    <div className="withdraw-info__text">
                        Заявка обрабатывается в течение 10–15 минут. Проверьте корректность суммы и
                        адреса перед подтверждением.
                    </div>
                </div>
            </section>

            <section className="card withdraw-card" aria-label="История выводов">
                <div className="withdraw-history__header">
                    <h2 className="withdraw-history__title">История выводов (последние 3)</h2>
                    <span className="withdraw-history__hint">Данные обновятся после интеграции с API</span>
                </div>

                <div className="withdraw-history__list">
                    {lastWithdrawals.map((item) => (
                        <article key={item.id} className="withdraw-history__item">
                            <div className="withdraw-history__meta">
                                <span className="withdraw-history__date">{item.date}</span>
                                <span
                                    className={`withdraw-history__status withdraw-history__status--${historyStatusClassMap[item.status]}`}
                                >
                                    {item.status}
                                </span>
                            </div>
                            <div className="withdraw-history__amount">
                                <span className="withdraw-history__value">{item.amount}</span>
                                <span className="withdraw-history__currency">USDT</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
