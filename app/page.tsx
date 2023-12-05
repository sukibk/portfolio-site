import Image from "next/image";
import Hero from "@/app/components/main/Hero";
import Skills from "@/app/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
