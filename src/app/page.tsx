import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Qualification } from "@/components/qualification";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Contact />
    </>
  );
}
