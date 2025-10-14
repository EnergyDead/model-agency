import clsx from "clsx";
import { useTranslation } from "../lib/i18n";
import { useRevealAnimation } from "../lib/useRevealAnimation";
import CircularText from "./CircularText";
import "./SectionStamp.css";
import LogoLockup from "./LogoLockup";

export default function SectionStamp() {
    const { t } = useTranslation();
    const { ref, isVisible } = useRevealAnimation({ threshold: 0.2 });

    return (
        <section className="stamp">
            <div ref={ref} className={clsx("stamp__grid", "reveal", isVisible && "is-visible")}>
                <div className="stamp__left">
                    <div className="stamp__copy">
                        <LogoLockup title={t("brand.title")} subtitle={t("brand.stampSubtitle") ?? ""} />
                    </div>

                </div>

                <div className="stamp__right">
                    <div className="stamp__ring">
                        <div className="stamp__circular2">
                            <CircularText
                                text={t("brand.circularText") ?? ""}
                                onHover="speedUp"
                                spinDuration={40}
                                className="stamp__circular"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}