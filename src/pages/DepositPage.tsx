import { useMemo, useState } from "react";

const quickAmounts = [50, 100, 200];

export default function DepositPage() {
    const [amount, setAmount] = useState("");

    const currentBalance = "1 234.56";
    const lastDepositInfo = useMemo(
        () => ({ amount: "100", status: "Успешно" }),
        [],
    );

    const handleQuickAmount = (value: number) => {
        setAmount(String(value));
    };

    const handleCreateDeposit = () => {
        const normalizedAmount = amount.trim() || "0";
        // TODO: integrate with real API when backend is ready
        console.log(`Создать пополнение на ${normalizedAmount} USDT`);
    };

    return (
        <div className="deposit-page">
            <header className="deposit-header">
                <h1 className="deposit-title">Пополнить баланс</h1>
                <p className="deposit-subtitle">
                    Укажите сумму пополнения и продолжите оплату через Telegram Wallet
                </p>
            </header>

            <section className="card deposit-card deposit-balance-card" aria-label="Текущий баланс">
                <div className="deposit-card__label">Текущий баланс</div>
                <div className="deposit-card__value">
                    <span className="deposit-card__amount">{currentBalance}</span>
                    <span className="deposit-card__currency">USDT</span>
                </div>
            </section>

            <section className="card deposit-card" aria-label="Форма пополнения">
                <div className="deposit-card__content">
                    <label className="deposit-field">
                        <span className="deposit-field__label">Сумма пополнения</span>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Сумма в USDT"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            className="deposit-field__input"
                            inputMode="decimal"
                        />
                    </label>

                    <div className="deposit-quick">
                        <span className="deposit-quick__label">Быстрый выбор</span>
                        <div className="deposit-quick__buttons">
                            {quickAmounts.map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    className="deposit-quick__button"
                                    onClick={() => handleQuickAmount(value)}
                                >
                                    {value} USDT
                                </button>
                            ))}
                        </div>
                    </div>

                    <button type="button" className="deposit-action" onClick={handleCreateDeposit}>
                        Создать пополнение
                    </button>
                </div>

                <div className="deposit-info" aria-label="Информация о пополнении">
                    <div className="deposit-info__text">
                        Оплата будет происходить через <strong>Telegram Wallet</strong>. После
                        создания заявки вы получите ссылку на оплату.
                    </div>
                    <div className="deposit-info__status">
                        Последнее пополнение: {lastDepositInfo.amount} USDT, статус: {" "}
                        <span className="deposit-info__status-badge">{lastDepositInfo.status}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
