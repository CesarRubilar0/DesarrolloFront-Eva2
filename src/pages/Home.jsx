import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";
import ScrollButtons from "../components/ScrollButtons";
import Footer from "../components/Footer";


const Home = () => {
    return (
    <>
        <HeroSection />
        <ServicesSection />
        <NewsSection />
        <ContactForm />
        <ScrollButtons />
        <Footer />
    </>
    );
};

export default Home;