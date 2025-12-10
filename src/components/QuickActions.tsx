import { Link } from "react-router-dom";

const actions = [
    { label: "Пополнить", to: "/deposit" },
    { label: "Вывести", to: "/withdraw" },
    { label: "История", to: "/history" },
];

export default function QuickActions() {
    return (
        <section className="card quick-actions">
            <div className="quick-actions__header">
                <h2 className="quick-actions__title">Быстрые действия</h2>
                <p className="quick-actions__subtitle">Управляйте балансом в пару кликов</p>
            </div>
            <div className="quick-actions__list">
                {actions.map((action) => (
                    <Link key={action.to} to={action.to} className="quick-actions__button">
                        {action.label}
                    </Link>
                ))}
            </div>
        </section>
    );
}
