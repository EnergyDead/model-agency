import "./SectionAbout.css";

export default function SectionAbout() {
    return (
        <section className="about">
            <div className="about__inner">
                <h2 className="about__title">Where opportunity finds you</h2>

                <div className="about__block">
                    <p>The ultimate boost</p>
                    <p>
                        We automate traffic and networking so opportunities find you — 24/7, without middlemen or
                        awkward
                        in-person meetings.
                    </p>
                </div>

                <div className="about__block">
                    <p>A new word in production</p>
                    <p>
                        This is not the old-school agency model. It’s a producer model for the digital era. Our system
                        constantly thinks about you:
                        <br/>– Who to connect you with.
                        <br/>– Where to position you.
                        <br/>– How to introduce you natively through influencer barter and brand collabs.
                    </p>
                </div>

                <div className="about__block">
                    <p>Safety by default</p>
                    <p>
                        Every model in our ecosystem has a legal insurance plan with 24/7 emergency legal support. All
                        contracts, deal terms, and negotiations are secured inside our framework.
                    </p>
                </div>

                <div className="about__block">
                    <p>Your only task?</p>
                    <p>
                        Focus on art. Create content. Travel. Grow. We handle the rest — contracts, safety, networking,
                        and spotlight.
                    </p>
                </div>

                <div className="about__block">
                    <p>Not the “Diddy business.”</p>
                    <p>
                        We are not here for shady deals or exploitation. We are here for safety, creativity, and
                        personal growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
