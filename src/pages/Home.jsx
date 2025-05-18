import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";
import ScrollButtons from "../components/ScrollButtons";
import Footer from "../components/Footer";




const Home = () => {
    return (
    <>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        <ContactForm />
        <ScrollButtons />
        <Footer />
    </>
    );
};

export default Home;