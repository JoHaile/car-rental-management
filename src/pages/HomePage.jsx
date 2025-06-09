import Callout from "../components/Callout";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HorizontalScroll from "../components/horizontal-scroll/HorizontalScroll";
import Mission from "../components/Mission";
import Testimonial from "../components/testimonial";

function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalScroll />
      <Features />
      <Mission />
      <Testimonial />
      <Callout />
      <Footer />
    </>
  );
}

export default HomePage;
