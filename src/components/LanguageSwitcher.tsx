import { useTranslation } from "../lib/i18n";
import "./LanguageSwitcher.css";

type LanguageOption = {
    code: "en" | "ru";
    label: string;
};

const LANGUAGES: LanguageOption[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
    const { language, changeLanguage, t } = useTranslation();
    const activeLanguage = language;

    const handleSelect = (code: LanguageOption["code"]) => {
        if (code === activeLanguage) {
            return;
        }

        changeLanguage(code);
    };

    return (
        <nav className="language-switcher" aria-label={t("languageSwitcher.label") ?? undefined}>
            {LANGUAGES.map((language) => (
                <button
                    key={language.code}
                    type="button"
                    className={`language-switcher__button${language.code === activeLanguage ? " language-switcher__button--active" : ""}`}
                    onClick={() => handleSelect(language.code)}
                    aria-pressed={language.code === activeLanguage}
                >
                    {language.label}
                </button>
            ))}
        </nav>
    );
}
