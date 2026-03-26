
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <section className="section-container bg-white border-b border-gray-100 pt-24">
        <div className="section-content">
          <Skills />
        </div>
      </section>
      <Footer />
    </>
  );
}

