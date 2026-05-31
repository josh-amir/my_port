import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="section-content">
      <section className="section">
        <Hero />
      </section>
      <section className="section">
        <Projects />
      </section>
      <section className="section">
        <Experience />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section">
        <Contact />
      </section>
    </main>
  );
}
