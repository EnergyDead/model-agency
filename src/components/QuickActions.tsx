import Button from "./ui/Button";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const actions = [
    { label: "Пополнить", to: "/deposit" },
    { label: "Вывести", to: "/withdraw" },
    { label: "История", to: "/history" },
];

export default function QuickActions() {
    return (
        <Card as="section" className="quick-actions" aria-labelledby="quick-actions-title">
            <SectionTitle
                title="Быстрые действия"
                subtitle="Основные операции под рукой"
                size="md"
                as="h2"
                align="left"
            />
            <div className="quick-actions__list">
                {actions.map((action) => (
                    <Button key={action.to} as="link" to={action.to} variant="secondary" fullWidth>
                        {action.label}
                    </Button>
                ))}
            </div>
            <p className="quick-actions__hint">Оплата и вывод проходят через Telegram Wallet</p>
        </Card>
    );
}
