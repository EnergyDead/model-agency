import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Dashboard" },
    { to: "/deposit", label: "Deposit" },
    { to: "/withdraw", label: "Withdraw" },
    { to: "/history", label: "History" },
    { to: "/pool", label: "Pool" },
];

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <ul className="bottom-nav__list">
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                ["bottom-nav__link", isActive ? "bottom-nav__link--active" : null]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
