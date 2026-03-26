import Navbar from "../../components/Navbar";
import Research from "../../components/Research";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="section-container bg-white border-b border-gray-100 pt-16 md:pt-24">
        <div className="section-content">
          <Research />
        </div>
      </section>
      <Footer />
    </>
  );
}


