import "./SectionBillboard.css";
import img1 from "../assets/billboard-1.jpg";
import img2 from "../assets/billboard-2.jpg";
import img3 from "../assets/billboard-3.jpg";

export default function SectionBillboard() {
    return (
        <section className="billboard">
            <div className="billboard__inner">
                <div className="billboard__track">
                    <img src={img1} alt="Dr. Ashurova — portrait" className="billboard__img" />
                    <img src={img2} alt="Procedure detail" className="billboard__img" />
                    <img src={img3} alt="Clinic interior" className="billboard__img" />
                </div>
            </div>
        </section>
    );
}
