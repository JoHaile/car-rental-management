import { useState } from "react";
import data from "../assets/db22";

const filterCars = () => {
  const [filter, setFilter] = useState({
    gas: false,
    electric: false,
    hybrid: false,
    price: false,
    brand: false,
  });
  const price = priceFilter(data);
  // const brand = brandFilter(price);
  const filterUser = typeFilter(price);

  function priceFilter(carData) {
    const newCars = filter.price
      ? carData.cars.sort((car1, car2) =>
          car1.rentalPricePerDay > car2.rentalPricePerDay ? 1 : -1
        )
      : carData.cars.sort((car1, car2) =>
          car1.rentalPricePerDay > car2.rentalPricePerDay ? -1 : 1
        );
    // console.log(newCars);

    return newCars;
  }

  // function brandFilter(carData) {
  //   const newCars = filter.brand ? carData.filter
  // }

  function typeFilter(carData) {
    const newCars = filter.gas
      ? carData.filter((car) => car.features.fuelType === "Gasoline")
      : filter.electric
        ? carData.filter((car) => car.features.fuelType === "Electric")
        : filter.hybrid
          ? carData.filter((car) => car.features.fuelType === "Hybrid")
          : carData;

    return newCars;
  }

  return { filter, setFilter, filterUser };
};

export default filterCars;
