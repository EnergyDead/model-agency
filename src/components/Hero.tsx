import "./Hero.css";
import hero from "../assets/hero.png";
import LogoLockup from "./LogoLockup";

export default function Hero() {
    return (
        <section className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className="hero__overlay"/>
            <div className="hero__inner">
                <LogoLockup title="sérendipité." subtitle="Beauty clinic by Feruza Ashurova"/>
            </div>
        </section>
    );
}
