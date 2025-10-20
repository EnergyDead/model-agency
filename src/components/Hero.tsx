import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "../lib/i18n";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import hand from "../assets/hand.png";
import LogoLockup from "./LogoLockup";

type HeroProps = {
    onViewWorks: () => void;
};

export default function Hero({ onViewWorks }: HeroProps) {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHandEngaged, setHandEngaged] = useState(false);
    const [isFast, setFast] = useState(false); // 👈 новое состояние для ускорения
    const clickTimeoutRef = useRef<number | null>(null);
    const resetTimeoutRef = useRef<number | null>(null);

    // вычисляем положение секции и прогресс скролла
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let frame = 0;

        const updateProgress = () => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 1;
            const viewportCenter = viewportHeight / 2;
            const sectionCenter = rect.top + rect.height / 2;
            const distanceFromCenter = viewportCenter - sectionCenter;
            const normalized = Math.max(-1, Math.min(1, distanceFromCenter / viewportHeight));
            setScrollProgress(normalized);
        };

        const handleScroll = () => {
            if (frame) window.cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(updateProgress);
        };

        updateProgress();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // ускоряем руку, если блок hero уходит вверх
    useEffect(() => {
        setFast(scrollProgress < -0.4);
    }, [scrollProgress]);

    // очищаем таймеры
    useEffect(() => {
        return () => {
            if (clickTimeoutRef.current) window.clearTimeout(clickTimeoutRef.current);
            if (resetTimeoutRef.current) window.clearTimeout(resetTimeoutRef.current);
        };
    }, []);

    // вычисляем положение руки
    const handTransform = useMemo(() => {
        const progress = Math.max(-1, Math.min(1, isHandEngaged ? 1 : scrollProgress));

        // если уходит вверх — слегка уменьшаем амплитуду
        const damped = progress < -0.3 ? progress * 0.6 : progress;

        const translateX = 10 + damped * 28;
        const translateY = 12 - damped * 10;
        const rotate = -10 + damped * 6;

        return `translate3d(${translateX}%, ${translateY}%, 0) rotate(${rotate}deg)`;
    }, [isHandEngaged, scrollProgress]);

    // при клике — "укол"
    const handleCtaClick = () => {
        setHandEngaged(true);

        if (resetTimeoutRef.current) window.clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = window.setTimeout(() => {
            setHandEngaged(false);
        }, 400); // чуть быстрее возврат

        if (clickTimeoutRef.current) window.clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = window.setTimeout(() => {
            onViewWorks();
        }, 120); // быстрее переход
    };

    return (
        <section ref={sectionRef} className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero__overlay" />
            <div className="hero__inner">
                <div className="hero__content">
                    <LogoLockup title={t("brand.title")} subtitle={t("brand.subtitle") ?? ""} />
                    <div className="hero__actions">
                        <button type="button" className="hero__cta" onClick={handleCtaClick}>
                            {t("hero.cta")}
                        </button>
                    </div>
                </div>
            </div>
            <img
                src={hand}
                alt=""
                aria-hidden="true"
                className={`hero__hand${
                    isHandEngaged ? " hero__hand--engaged" : ""
                }${isFast ? " hero__hand--fast" : ""}`} // 👈 теперь добавляется ускоренный класс
                style={{ transform: handTransform }}
            />
        </section>
    );
}
