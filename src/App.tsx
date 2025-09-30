import Hero from "./components/Hero";
import SectionAbout from "./components/SectionAbout";
import SectionStamp from "./components/SectionStamp";
import SectionBillboard from "./components/SectionBillboard";
import SiteFooter from "./components/SiteFooter";
import "./index.css";

export default function App() {
    return (
        <>
            <Hero/>
            <SectionAbout/>
            <SectionStamp/>
            <SectionBillboard/>
            <SiteFooter/>
        </>
    );
}
