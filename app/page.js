import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section id="hero" className="section-container bg-white">
        <div className="section-content">
          <Hero />
        </div>
      </section>
      <Footer />
    </>
  );
}
