import Navbar from "../../components/Navbar";
import Labs from "../../components/Labs";
import Footer from "../../components/Footer";

export default function LabsPage() {
  return (
    <>
      <Navbar />
      <section className="section-container bg-white border-b-2 border-black pt-24 md:pt-32">
        <div className="section-content">
          <Labs />
        </div>
      </section>
      <Footer />
    </>
  );
}

