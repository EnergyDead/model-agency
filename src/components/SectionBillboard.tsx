import "./SectionBillboard.css";
import hero from "../assets/billboard.jpg";

export default function SectionBillboard() {
    return (
        <section
            className="billboard"
            style={{backgroundImage: `url(${hero})`}}
        />
    );
}
