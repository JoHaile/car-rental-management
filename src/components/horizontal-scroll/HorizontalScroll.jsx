import { Heading, Image } from "@chakra-ui/react";
import bmw from "../../assets/car-logos/bmw.svg";
import chevrolet from "../../assets/car-logos/chevrolet.svg";
import ford from "../../assets/car-logos/ford.svg";
import honda from "../../assets/car-logos/honda.svg";
import jeep from "../../assets/car-logos/jeep.svg";
import mercedes from "../../assets/car-logos/mercedes.svg";
import tesla from "../../assets/car-logos/tesla.svg";
import toyota from "../../assets/car-logos/toyota.svg";
import volkswagen from "../../assets/car-logos/volkswagen.svg";
import audi from "../../assets/car-logos/audi.svg";
import "./style.css";

function HorizontalScroll() {
  return (
    <>
      <Heading as="h2" textAlign="center" m="3rem 0 2rem 0">
        MANUFACTURES FEATURED ON OUR FLEET
      </Heading>

      <div className="scroll-container">
        <ul>
          {[...companies, ...companies].map((company, index) => (
            <Image key={index} src={company.svg} boxSize="70px" />
          ))}
        </ul>
      </div>
    </>
  );
}

export default HorizontalScroll;

const companies = [
  {
    svg: bmw,
  },
  {
    svg: chevrolet,
  },
  {
    svg: mercedes,
  },
  {
    svg: ford,
  },
  {
    svg: honda,
  },
  {
    svg: jeep,
  },
  {
    svg: tesla,
  },
  {
    svg: toyota,
  },
  {
    svg: volkswagen,
  },
  {
    svg: audi,
  },
];
