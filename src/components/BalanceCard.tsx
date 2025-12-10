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
        <section className="card balance-card">
            <div className="balance-card__label">Ваш баланс</div>
            <div className="balance-card__value">
                <span className="balance-card__amount">{balance}</span>
                <span className="balance-card__currency">USDT</span>
            </div>
            <div className="balance-card__meta">
                <span className="balance-card__meta-item">Доля пула: {poolShare}</span>
                <span className="balance-card__meta-separator" aria-hidden="true">
                    •
                </span>
                <span className="balance-card__meta-item">Цена unit: {unitPrice}</span>
            </div>
        </section>
    );
}
