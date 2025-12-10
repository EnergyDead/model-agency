import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type TelegramColorScheme = "light" | "dark";

type TelegramThemeParams = {
    bg_color?: string;
    text_color?: string;
    secondary_bg_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
};

type TelegramWebApp = {
    ready: () => void;
    colorScheme?: TelegramColorScheme;
    themeParams?: TelegramThemeParams;
};

type TelegramContextValue = {
    webApp?: TelegramWebApp;
    colorScheme: TelegramColorScheme;
    themeParams: TelegramThemeParams;
};

type ResolvedTheme = {
    background: string;
    text: string;
    surface: string;
    surfaceStrong: string;
    border: string;
    muted: string;
    accent: string;
};

const defaultPalette: Record<TelegramColorScheme, ResolvedTheme> = {
    light: {
        background: "#f8fafc",
        text: "#0f172a",
        surface: "#ffffffd9",
        surfaceStrong: "#e2e8f0",
        border: "#cbd5e1",
        muted: "#475569",
        accent: "#0f172a",
    },
    dark: {
        background: "#0a0c10",
        text: "#e5e7eb",
        surface: "#0f172acc",
        surfaceStrong: "#111827",
        border: "#1f2937",
        muted: "#94a3b8",
        accent: "#e5e7eb",
    },
};

const TelegramContext = createContext<TelegramContextValue>({
    webApp: undefined,
    colorScheme: "light",
    themeParams: {},
});

function getTelegramWebApp(): TelegramWebApp | undefined {
    if (typeof window === "undefined") {
        return undefined;
    }
    return (window as unknown as { Telegram?: { WebApp?: TelegramWebApp } }).Telegram?.WebApp;
}

function resolveTheme(
    colorScheme: TelegramColorScheme,
    themeParams: TelegramThemeParams,
): ResolvedTheme {
    const defaults = defaultPalette[colorScheme];

    return {
        background: themeParams.bg_color ?? defaults.background,
        text: themeParams.text_color ?? defaults.text,
        surface: themeParams.secondary_bg_color ?? defaults.surface,
        surfaceStrong: themeParams.secondary_bg_color ?? defaults.surfaceStrong,
        border: defaults.border,
        muted: themeParams.hint_color ?? defaults.muted,
        accent: themeParams.button_color ?? defaults.accent,
    };
}

export function useTelegramTheme() {
    return useContext(TelegramContext);
}

export function TelegramProvider({ children }: { children: ReactNode }) {
    const [webApp] = useState<TelegramWebApp | undefined>(() => getTelegramWebApp());

    const colorScheme: TelegramColorScheme = webApp?.colorScheme === "dark" ? "dark" : "light";
    const themeParams = webApp?.themeParams ?? {};

    const resolvedTheme = useMemo(() => resolveTheme(colorScheme, themeParams), [colorScheme, themeParams]);

    useEffect(() => {
        if (webApp?.ready) {
            webApp.ready();
        }
    }, [webApp]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--app-bg", resolvedTheme.background);
        root.style.setProperty("--app-text", resolvedTheme.text);
        root.style.setProperty("--app-surface", resolvedTheme.surface);
        root.style.setProperty("--app-surface-strong", resolvedTheme.surfaceStrong);
        root.style.setProperty("--app-border", resolvedTheme.border);
        root.style.setProperty("--app-muted", resolvedTheme.muted);
        root.style.setProperty("--app-accent", resolvedTheme.accent);
    }, [resolvedTheme]);

    const contextValue = useMemo(
        () => ({
            webApp,
            colorScheme,
            themeParams,
        }),
        [webApp, colorScheme, themeParams],
    );

    return <TelegramContext.Provider value={contextValue}>{children}</TelegramContext.Provider>;
}
