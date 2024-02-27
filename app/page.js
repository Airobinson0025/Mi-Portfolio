import Image from "next/image";
import Hero from "./components/Hero";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <Tools />
    </main>
  );
}
