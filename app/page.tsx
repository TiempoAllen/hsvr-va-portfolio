import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Results from "@/components/Results";
import Platforms from "@/components/Platforms";
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
        <Results />
        <Platforms />
        {/* <Captions /> — hidden until there are real client captions to show */}
        <Packages />
      </main>
      <Contact />
    </>
  );
}
