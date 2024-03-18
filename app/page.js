import Image from "next/image";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <Skills />
      <Tools />
    </main>
  );
}
