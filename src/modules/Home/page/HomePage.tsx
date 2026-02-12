import Hero from "../components/Hero";
import WhatIs from "../components/WhatIs";
import heroImg from "../assets/herobackground.webp";
import RoadImage from "../components/RoadImage";
import ItalianExperience from "../components/ItalianExperience";
import OurPhilosophy from "../components/OurPhilosophy";
import ornament from "../assets/ourpilo/cadena.webp";
import CommunitySection from "../components/CommunitySection";
import imgFront from "../assets/community/ciclistas.webp"; // la foto color
import imgBack from "../assets/community/paisaje.webp";
import WhoItsForSection from "../components/WhoItsForSection";
import carFront from "../assets/carro/carro.webp";
import carBack from "../assets/carro/paisaje.webp";
import BrandBanner from "../components/BrandBanner";
import bannerImg from "../assets/brand/fondo.png"; // Add the correct path to the image
import centerLogo from "../assets/brand/logo.png";

export default function HomePage() {
  return (
    <main className="w-full" id="home">
      <Hero backgroundSrc={heroImg} />
      <WhatIs />
      <RoadImage py="py-[100px]" maxWidth={1280} />
      <ItalianExperience />
      <OurPhilosophy ornamentSrc={ornament} />
      <CommunitySection imageFront={imgFront} imageBack={imgBack} />
      <WhoItsForSection imageFront={carFront} imageBack={carBack} />
      <BrandBanner
        imageSrc={bannerImg}
        centerLogoSrc={centerLogo}
        height={360}
      />
    </main>
  );
}
