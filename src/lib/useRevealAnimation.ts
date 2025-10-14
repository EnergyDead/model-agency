import { useCallback, useEffect, useState } from "react";

type UseRevealAnimationOptions = {
    threshold?: number | number[];
    rootMargin?: string;
    once?: boolean;
};

export function useRevealAnimation({
    threshold = 0.2,
    rootMargin = "0px",
    once = true,
}: UseRevealAnimationOptions = {}) {
    const [node, setNode] = useState<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
        if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
            return false;
        }

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });

    useEffect(() => {
        if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
            return undefined;
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        const element = node;
        if (!element) {
            return undefined;
        }

        if (prefersReducedMotion) {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold, rootMargin },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [node, once, prefersReducedMotion, rootMargin, threshold]);

    const ref = useCallback((element: HTMLElement | null) => {
        setNode(element);
    }, []);

    return { ref, isVisible } as const;
}
