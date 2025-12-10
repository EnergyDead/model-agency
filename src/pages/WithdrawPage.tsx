import { useMemo, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

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
        <div className="page-shell">
            <SectionTitle
                eyebrow="Операции"
                title="Вывод средств"
                subtitle="Переведите заработанные средства в удобный кошелёк"
            />

            <div className="two-column-grid">
                <Card as="section" className="metric-card" variant="highlight">
                    <p className="metric-card__label">Текущий баланс</p>
                    <div className="metric-card__value">
                        <span className="metric-card__amount">{currentBalance}</span>
                        <span className="metric-card__currency">USDT</span>
                    </div>
                </Card>

                <Card as="section" className="metric-card">
                    <p className="metric-card__label">Доступно к выводу</p>
                    <div className="metric-card__value">
                        <span className="metric-card__amount">{maxAvailable}</span>
                        <span className="metric-card__currency">USDT</span>
                    </div>
                    <p className="metric-card__hint">Ограничения установлены настройками пула</p>
                </Card>
            </div>

            <Card as="section" className="form-card" aria-label="Форма вывода">
                <div className="form-grid">
                    <label className="form-field">
                        <span className="form-field__label">Сумма вывода</span>
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

                    <label className="form-field">
                        <span className="form-field__label">Адрес для получения (опционально)</span>
                        <input
                            type="text"
                            placeholder="Адрес кошелька / TG Wallet"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            className="form-field__input"
                        />
                    </label>
                </div>

                <Button type="button" variant="primary" fullWidth onClick={handleCreateWithdraw}>
                    Создать заявку на вывод
                </Button>

                <div className="info-banner" role="status">
                    Заявка обрабатывается в течение 10–15 минут. Проверьте корректность суммы и адреса перед
                    подтверждением.
                </div>
            </Card>

            <Card as="section" className="history-card" aria-label="История выводов">
                <SectionTitle title="История выводов (последние 3)" size="md" as="h2" align="left" />
                <div className="history-list">
                    {lastWithdrawals.map((item) => (
                        <article key={item.id} className="history-row">
                            <div>
                                <p className="history-row__date">{item.date}</p>
                                <p className="history-row__amount">
                                    {item.amount}
                                    <span className="history-row__currency">USDT</span>
                                </p>
                            </div>
                            <span className={`history-row__status history-row__status--${historyStatusClassMap[item.status]}`}>
                                {item.status}
                            </span>
                        </article>
                    ))}
                </div>
            </Card>
        </div>
    );
}
