import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Spotlights from "@/components/Spotlights";
import Platforms from "@/components/Platforms";
import Captions from "@/components/Captions";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Offers />
        <Spotlights />
        <Platforms />
        <Captions />
        <Packages />
      </main>
      <Contact />
    </>
  );
}
