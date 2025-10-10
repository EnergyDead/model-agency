import { useTranslation } from "../lib/i18n";
import "./SectionBillboard.css";
import img1 from "../assets/billboard-1.jpg";
import img2 from "../assets/billboard-2.jpg";
import img3 from "../assets/billboard-3.jpg";

export default function SectionBillboard() {
    const { t } = useTranslation();

    return (
        <section className="billboard">
            <div className="billboard__inner">
                <div className="billboard__track">
                    <img src={img3} alt={t("billboard.alt3") ?? ""} className="billboard__img" />
                    <img src={img2} alt={t("billboard.alt2") ?? ""} className="billboard__img" />
                    <img src={img1} alt={t("billboard.alt1") ?? ""} className="billboard__img" />
                </div>
            </div>
        </section>
    );
}
