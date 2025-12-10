import Card from "./ui/Card";

interface BalanceCardProps {
    balance?: string;
    poolShare?: string;
    unitPrice?: string;
}

export default function BalanceCard({
    balance = "1234.56",
    poolShare = "12.3%",
    unitPrice = "1.07 USDT",
}: BalanceCardProps) {
    return (
        <Card as="section" className="balance-card" variant="highlight" aria-label="Ваш баланс">
            <div className="balance-card__header">
                <p className="muted">Баланс счёта</p>
                <span className="balance-card__chip">USDT Pool</span>
            </div>
            <div className="balance-card__value">
                <span className="balance-card__amount">{balance}</span>
                <span className="balance-card__currency">USDT</span>
            </div>
            <div className="balance-card__meta" aria-label="Дополнительные показатели">
                <div className="meta-item">
                    <span className="meta-item__label">Доля пула</span>
                    <span className="meta-item__value">{poolShare}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-item__label">Цена unit</span>
                    <span className="meta-item__value">{unitPrice}</span>
                </div>
            </div>
        </Card>
    );
}
