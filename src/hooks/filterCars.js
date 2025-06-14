import { useState } from "react";
import data from "../assets/db22";

const filterCars = () => {
  const [filter, setFilter] = useState({
    gas: false,
    electric: false,
    hybrid: false,
    price: false,
    sedan: false,
    suv: false,
    luxury: false,
  });

  // console.log(data.cars.map((car) => car.category));

  const price = priceFilter(data);
  const category = categoryFilter(price);
  const filterUser = typeFilter(category);

  //? for the filter result dynamic heading
  const filterResult = filter.gas
    ? " Gasoline"
    : filter.electric
      ? " Electric"
      : filter.hybrid
        ? " Hybrid Cars"
        : filter.sedan
          ? " Sedan"
          : filter.suv
            ? " SUVs"
            : filter.luxury
              ? " Luxury"
              : filter.price
                ? " Low Price"
                : " Relevance";

  function priceFilter(carData) {
    const newCars = filter.price
      ? carData.cars.sort((car1, car2) =>
          car1.rentalPricePerDay > car2.rentalPricePerDay ? 1 : -1
        )
      : carData.cars.sort((car1, car2) =>
          car1.rentalPricePerDay > car2.rentalPricePerDay ? -1 : 1
        );
    // console.log(newCars.map((car) => car.category));

    return newCars;
  }

  function categoryFilter(carData) {
    const newCars = filter.luxury
      ? carData.filter((car) => car.category === "Luxury")
      : filter.suv
        ? carData.filter((car) => car.category === "SUV")
        : filter.sedan
          ? carData.filter((car) => car.category === "Sedan")
          : carData;

    return newCars;
  }

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

  return { filter, setFilter, filterUser, filterResult };
};

export default filterCars;
