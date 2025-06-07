import Features from "../components/Features";
import Hero from "../components/Hero";
import HorizontalScroll from "../components/horizontal-scroll/HorizontalScroll";
import Mission from "../components/Mission";

function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalScroll />
      <Features />
      <Mission />
    </>
  );
}

export default HomePage;
