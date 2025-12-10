import { useMemo, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

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
        <div className="page-shell">
            <SectionTitle
                eyebrow="Операции"
                title="Пополнить баланс"
                subtitle="Укажите сумму и продолжите оплату через Telegram Wallet"
            />

            <div className="two-column-grid">
                <Card as="section" className="metric-card" variant="highlight">
                    <p className="metric-card__label">Текущий баланс</p>
                    <div className="metric-card__value">
                        <span className="metric-card__amount">{currentBalance}</span>
                        <span className="metric-card__currency">USDT</span>
                    </div>
                    <p className="metric-card__hint">Обновится сразу после успешного пополнения</p>
                </Card>

                <Card as="section" className="info-card">
                    <p className="muted">Оплата произойдет через Telegram Wallet</p>
                    <p className="info-card__accent">Мы сформируем заявку и отправим ссылку на оплату.</p>
                    <div className="badge-row">
                        <span className="pill pill--success">Авторассылка ссылки</span>
                        <span className="pill">Без комиссии платформы</span>
                    </div>
                    <p className="info-card__status">
                        Последнее пополнение: {lastDepositInfo.amount} USDT — {lastDepositInfo.status}
                    </p>
                </Card>
            </div>

            <Card as="section" className="form-card" aria-label="Форма пополнения">
                <div className="form-grid">
                    <label className="form-field">
                        <span className="form-field__label">Сумма пополнения</span>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Сумма в USDT"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            className="form-field__input"
                            inputMode="decimal"
                        />
                    </label>

                    <div className="form-field">
                        <span className="form-field__label">Быстрый выбор</span>
                        <div className="pill-group">
                            {quickAmounts.map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    className="pill pill--interactive"
                                    onClick={() => handleQuickAmount(value)}
                                >
                                    {value} USDT
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <Button type="button" variant="primary" fullWidth onClick={handleCreateDeposit}>
                    Создать пополнение
                </Button>
            </Card>
        </div>
    );
}
