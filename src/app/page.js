import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
    </div>
    </>
  );
}
