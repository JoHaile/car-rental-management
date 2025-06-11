import Callout from "../components/Callout";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HorizontalScroll from "../components/horizontal-scroll/HorizontalScroll";
import Mission from "../components/Mission";
import ScrollTop from "../components/scrollTop";
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
    </>
  );
}

export default HomePage;
