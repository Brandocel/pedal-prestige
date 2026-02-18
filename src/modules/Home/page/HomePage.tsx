import Hero from "../components/Hero";
import WhatIs from "../components/WhatIs";
import heroImg from "../assets/herobackground.webp";
import RoadImage from "../components/RoadImage";
import ItalianExperience from "../components/ItalianExperience";
import OurPhilosophy from "../components/OurPhilosophy";
import ornament from "../assets/ourpilo/cadena.webp";
import CommunitySection from "../components/CommunitySection";
import imgFront from "../assets/community/ciclistas.webp";
import imgBack from "../assets/community/paisaje.webp";
import WhoItsForSection from "../components/WhoItsForSection";
import carFront from "../assets/carro/carro.webp";
import carBack from "../assets/carro/paisaje.webp";
import BrandBanner from "../components/BrandBanner";
import bannerImg from "../assets/brand/fondo.png";
import centerLogo from "../assets/brand/logo.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="w-full" id="home">
      <section id="home">
        <Hero backgroundSrc={heroImg} />
      </section>

      <section id="about">
        <WhatIs />
      </section>

      {/* Si no ocupa sección, igual puedes ponerle un wrapper */}
      <RoadImage py="py-[100px]" maxWidth={1280} />

      <section id="italianexperience">
        <ItalianExperience />
      </section>

      {/* ✅ ESTE ES TU DISCOVER */}
      <section id="discover">
        <OurPhilosophy ornamentSrc={ornament} />
      </section>

      <section id="community">
        <CommunitySection imageFront={imgFront} imageBack={imgBack} />
      </section>

      <section id="whoitsfor">
        <WhoItsForSection imageFront={carFront} imageBack={carBack} />
      </section>

      <BrandBanner
        imageSrc={bannerImg}
        centerLogoSrc={centerLogo}
        height={360}
      />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
