import Image from "next/image";
import Hero from "@/app/components/main/Hero";
import Skills from "@/app/components/main/Skills";
import Encryption from "@/app/components/main/Encryption";
import Projects from "@/app/components/main/Projects";
import Footer from "@/app/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
