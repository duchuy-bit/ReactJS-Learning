import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import ServiceImg from "../assets/night.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
    return (
        <div>
            <Navbar />
            <Hero cName={"hero-mid"} heroImg={ServiceImg} title="Service" btnClass="hide" />

            <Trip />
            <Footer />
        </div>
    );
}

export default Service;
