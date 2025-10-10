import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import enTranslation from "../locales/en/translation.json";
import ruTranslation from "../locales/ru/translation.json";

type LanguageCode = "en" | "ru";

type TranslateOptions = {
    returnObjects?: boolean;
};

type TranslationResources = typeof enTranslation;

type TranslationContextValue = {
    language: LanguageCode;
    changeLanguage: (language: LanguageCode) => void;
    t: <T = string>(key: string, options?: TranslateOptions) => T;
};

const translations: Record<LanguageCode, TranslationResources> = {
    en: enTranslation,
    ru: ruTranslation,
};

const fallbackLanguage: LanguageCode = "en";

const I18nContext = createContext<TranslationContextValue | undefined>(undefined);

const resolvePath = (language: LanguageCode, key: string): unknown => {
    return key.split(".").reduce<unknown>((result, segment) => {
        if (result && typeof result === "object" && segment in (result as Record<string, unknown>)) {
            return (result as Record<string, unknown>)[segment];
        }

        return undefined;
    }, translations[language]);
};

const getInitialLanguage = (): LanguageCode => {
    if (typeof window === "undefined") {
        return fallbackLanguage;
    }

    const stored = window.localStorage.getItem("i18n-language") as LanguageCode | null;
    if (stored && stored in translations) {
        return stored;
    }

    if (window.navigator.language.toLowerCase().startsWith("ru")) {
        return "ru";
    }

    return fallbackLanguage;
};

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);

    const changeLanguage = useCallback((nextLanguage: LanguageCode) => {
        setLanguage((current) => {
            if (current === nextLanguage) {
                return current;
            }

            if (typeof window !== "undefined") {
                window.localStorage.setItem("i18n-language", nextLanguage);
            }

            return nextLanguage;
        });
    }, []);

    const t = useCallback(<T,>(key: string, options?: TranslateOptions): T => {
        const value = resolvePath(language, key);
        const fallback = value === undefined ? resolvePath(fallbackLanguage, key) : undefined;

        if (options?.returnObjects) {
            return (value ?? fallback ?? key) as T;
        }

        if (typeof value === "string") {
            return value as T;
        }

        if (typeof fallback === "string") {
            return fallback as T;
        }

        return key as T;
    }, [language]);

    const contextValue = useMemo<TranslationContextValue>(() => ({
        language,
        changeLanguage,
        t,
    }), [changeLanguage, language, t]);

    return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }

    return context;
}
