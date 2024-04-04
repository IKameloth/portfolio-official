import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 bg-styled ">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />
      <Tools />
      <Contact />
    </main>
  );
}
