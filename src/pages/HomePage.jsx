import Features from "../components/Features";
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
      <Testimonial />
      <Mission />
    </>
  );
}

export default HomePage;
