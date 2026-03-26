import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="section-container bg-white border-b border-gray-100 pt-16 md:pt-24">
        <div className="section-content">
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
}

