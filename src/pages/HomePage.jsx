import Callout from "../components/Callout";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HorizontalScroll from "../components/horizontal-scroll/HorizontalScroll";
import Mission from "../components/Mission";
import Testimonial from "../components/Testimonial";
import Transition from "../transition";

function HomePage() {
  return (
    <>
      <Transition>
        <Hero />
        <HorizontalScroll />
        <Features />
        <Mission />
        <Testimonial />
        <Callout />
      </Transition>
    </>
  );
}

export default HomePage;
