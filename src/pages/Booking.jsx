import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/db.json";

function Booking() {
  const { id } = useParams();
  const car = data.cars.find((car) => car.id === id && car);

  if (!car) {
    return <div>Car not found</div>;
  }

  console.log(car);

  return (
    <div>
      <ul>
        <li>{car.make}</li>
        <li>{car.model}</li>
        <li>{car.horsePower}</li>
        <li>{car.category}</li>
      </ul>
    </div>
  );
}

export default Booking;
