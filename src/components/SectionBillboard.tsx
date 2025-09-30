import "./SectionBillboard.css";
import hero from "../assets/billboard.png";
import heroMob from "../assets/billboard-mob.png";

export default function SectionBillboard() {
    return (
        <section className="billboard">
            <picture>
                <source srcSet={heroMob} media="(max-width: 768px)" />
                <img src={hero} alt="" className="billboard__img" />
            </picture>
        </section>
    );
}
