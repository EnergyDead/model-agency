import CircularText from "./CircularText";
import "./SectionStamp.css";
import LogoLockup from "./LogoLockup.tsx";

export default function SectionStamp() {
    return (
        <section className="stamp">
            <div className="stamp__grid">
                <div className="stamp__left">
                    <div className="stamp__copy">
                        <LogoLockup title="ProBonoAI" subtitle="LEGAL PLATFORM" />
                    </div>

                </div>

                <div className="stamp__right">
                    <div className="stamp__ring">
                        <div className="stamp__circular2">
                            <CircularText
                                text="TECH*NETWORK*MONEY*"
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