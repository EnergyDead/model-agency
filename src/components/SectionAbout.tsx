import "./SectionAbout.css";
import DecryptedText from "./DecryptedText.tsx";

export default function SectionAbout() {
    return (
        <section className="about">
            <div className="about__inner">
                <h2 className="about__title">
                    <DecryptedText
                        text="Where opportunity finds you"
                        speed={100}
                        animateOn="view"
                        revealDirection="center"
                    />
                </h2>

                <div className="about__block">
                    <DecryptedText
                        text="The ultimate boost"
                        speed={100}
                        animateOn="view"
                        revealDirection="start"
                        className="about__headline"
                    />
                    <DecryptedText
                        text="We automate traffic and networking so opportunities find you — 24/7, without middlemen or awkward in-person meetings."
                        speed={160}
                        animateOn="view"
                        revealDirection="start"
                        className="about__text"
                    />
                </div>

                <div className="about__block">
                    <DecryptedText
                        text="A new word in production"
                        speed={100}
                        animateOn="view"
                        revealDirection="start"
                        className="about__headline"
                    />
                    <DecryptedText
                        text={`This is not the old-school agency model. It’s a producer model for the digital era. Our system constantly thinks about you:\n– Who to connect you with.\n– Where to position you.\n– How to introduce you natively through influencer barter and brand collabs.`}
                        speed={160}
                        animateOn="view"
                        revealDirection="start"
                        className="about__text"
                    />
                </div>

                <div className="about__block">
                    <DecryptedText
                        text="Safety by default"
                        speed={100}
                        animateOn="view"
                        revealDirection="start"
                        className="about__headline"
                    />
                    <DecryptedText
                        text="Every model in our ecosystem has a legal insurance plan with 24/7 emergency legal support. All contracts, deal terms, and negotiations are secured inside our framework."
                        speed={160}
                        animateOn="view"
                        revealDirection="start"
                        className="about__text"
                    />
                </div>

                <div className="about__block">
                    <DecryptedText
                        text="Your only task?"
                        speed={100}
                        animateOn="view"
                        revealDirection="start"
                        className="about__headline"
                    />
                    <DecryptedText
                        text="Focus on art. Create content. Travel. Grow. We handle the rest — contracts, safety, networking, and spotlight."
                        speed={160}
                        animateOn="view"
                        revealDirection="start"
                        className="about__text"
                    />
                </div>

                <div className="about__block">
                    <DecryptedText
                        text="Not the “Diddy business.”"
                        speed={100}
                        animateOn="view"
                        revealDirection="start"
                        className="about__headline"
                    />
                    <DecryptedText
                        text="We are not here for shady deals or exploitation. We are here for safety, creativity, and personal growth."
                        speed={160}
                        animateOn="view"
                        revealDirection="start"
                        className="about__text"
                    />
                </div>
            </div>
        </section>
    );
}
