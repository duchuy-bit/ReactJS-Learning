import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import HomeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                cName={"hero"}
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                url="/"
                buttonText="Travel Plan"
                btnClass="show"
            />
            <Destination />
            <Trip />

            <Footer />
        </div>
    );
}

export default Home;
