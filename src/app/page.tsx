import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Qualification } from "@/components/qualification";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Work />
    </>
  );
}
