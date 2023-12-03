import Image from "next/image";
import Hero from "@/app/components/main/Hero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero></Hero>
      </div>
    </main>
  );
}