import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/night.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div>
            <Navbar />

            <Hero cName={"hero-mid"} heroImg={ContactImg} title="Contact" btnClass="hide" />

            <ContactForm />

            <Footer />
        </div>
    );
}

export default Contact;
