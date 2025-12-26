import { useEffect, useRef } from "react";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    ariaTitleId?: string;
};

function isMobileWidth() {
    if (typeof window === "undefined") {
        return false;
    }
    return window.matchMedia("(max-width: 768px)").matches;
}

export default function Drawer({
    open,
    onClose,
    children,
    ariaTitleId,
}: DrawerProps) {
    const lastOverflow = useRef<string | null>(null);

    useEffect(() => {
        if (!open) {
            if (lastOverflow.current !== null) {
                document.body.style.overflow = lastOverflow.current;
                lastOverflow.current = null;
            }
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        if (isMobileWidth()) {
            lastOverflow.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (lastOverflow.current !== null) {
                document.body.style.overflow = lastOverflow.current;
                lastOverflow.current = null;
            }
        };
    }, [open, onClose]);

    return (
        <div className={`drawer ${open ? "drawer--open" : ""}`}>
            <div className="drawer__overlay" onClick={onClose} />
            <div
                className="drawer__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={ariaTitleId}
            >
                {children}
            </div>
        </div>
    );
}
