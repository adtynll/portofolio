import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./hero";
import About from "./about";
import Experience from "./experience";
import Project from "./certificate";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <header className="cursor-default sticky top-0 z-50">
        <Header />
      </header>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
