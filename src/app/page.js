import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioClientScripts from "@/components/PortfolioClientScripts";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="relative z-10">
      <div id="home">
          <Hero />
        </div>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <PortfolioClientScripts/>

    </div>
    </>
  );
}
