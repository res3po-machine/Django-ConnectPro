import Navbar from "../components/narvar";
import Hero from "../components/hero";
import Features from "../components/feature";
import Pricing from "../components/pricing";
import Footer from "../components/footbar";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
};

export default Index;
