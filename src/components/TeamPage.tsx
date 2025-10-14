import clsx from "clsx";
import { useEffect } from "react";
import { useTranslation } from "../lib/i18n";
import { useRevealAnimation } from "../lib/useRevealAnimation";
import "./TeamPage.css";
import feruzaPortrait from "../assets/feruza.jpg";
import operationsPortrait from "../assets/team2.png";
import artistryPortrait from "../assets/team3.png";
import skincarePortrait from "../assets/team4.png";

type TeamPageProps = {
    onNavigate: (path: string) => void;
};

type MemberCopy = {
    name: string;
    role: string;
    bio: string;
    photoAlt?: string;
};

type MemberKey = "ceo" | "operations" | "artistry" | "skincare";

type MemberConfig = {
    key: MemberKey;
    image: string;
};

const memberConfig: MemberConfig[] = [
    { key: "ceo", image: feruzaPortrait },
    { key: "operations", image: operationsPortrait },
    { key: "artistry", image: artistryPortrait },
    { key: "skincare", image: skincarePortrait },
];

export default function TeamPage({ onNavigate }: TeamPageProps) {
    const { t } = useTranslation();
    const copies = t("team.members", { returnObjects: true }) as Record<MemberKey, MemberCopy>;
    const { ref: pageRef, isVisible: pageVisible } = useRevealAnimation({ threshold: 0.1 });
    const { ref: headerRef, isVisible: headerVisible } = useRevealAnimation({ threshold: 0.2 });
    const { ref: membersRef, isVisible: membersVisible } = useRevealAnimation({ threshold: 0.2 });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <main ref={pageRef} className={clsx("team", "reveal", pageVisible && "is-visible")}>
            <header ref={headerRef} className={clsx("team__header", "reveal", headerVisible && "is-visible")}>
                <button type="button" className="team__back" onClick={() => onNavigate("/")}>
                    {t("team.back")}
                </button>
                <div className="team__headline">
                    <p className="team__eyebrow">{t("team.eyebrow")}</p>
                    <h1 className="team__title">{t("team.title")}</h1>
                    <p className="team__lead">{t("team.lead")}</p>
                </div>
            </header>

            <section
                ref={membersRef}
                className={clsx("team__members", "reveal", membersVisible && "is-visible")}
                aria-label={t("team.title") ?? ""}
            >
                {memberConfig.map(({ key, image }) => {
                    const copy = copies[key] ?? { name: key, role: "", bio: "", photoAlt: "" };

                    return (
                        <article key={key} className="team__card">
                            <div className="team__media">
                                <img src={image} alt={copy.photoAlt ?? copy.name} loading="lazy" />
                            </div>
                            <div className="team__info">
                                <p className="team__role">{copy.role}</p>
                                <h2 className="team__name">{copy.name}</h2>
                                <p className="team__bio">{copy.bio}</p>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}
