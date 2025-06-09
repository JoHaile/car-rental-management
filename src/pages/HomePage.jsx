import Features from "../components/Features";
import Hero from "../components/Hero";
import HorizontalScroll from "../components/horizontal-scroll/HorizontalScroll";
import Mission from "../components/Mission";
import bd from "../../db.json";

function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalScroll />
      <Features />
      <Mission />
      {bd.cars.map((car) => car.photos.map((r) => <img src={r} />))}
    </>
  );
}

export default HomePage;
