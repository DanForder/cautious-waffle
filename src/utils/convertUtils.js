/* eslint-disable no-unused-vars */
export const litresToGallons = (litres) => litres / 4.546;
export const gallonsToLitres = (gallons) => gallons * 4.546;

export const getCostResult = (carNumber, carUnit, fuelNumber, fuelUnit) => {
  // carUnit is in gallons
  // fuelUnit is in litres
  console.log(carNumber);

  carNumber = gallonsToLitres(carNumber);

  console.log(carNumber);

  return ((fuelNumber / carNumber) * 20).toFixed(4);
};

// roughly 414 miles per £70

export const getDistanceResult = () =>
  // carNumber, carUnit, fuelNumber, fuelUnit
  {
    //   console.log(carNumber, fuelNumber);

    //   if (carUnit === "Gallon") {
    //     carNumber = gallonsToLitres(carNumber);
    //   }

    //   if (fuelUnit === "Gallon") {
    //     fuelNumber = gallonsToLitres(fuelNumber);
    //   }

    //   // both car and fuel are in litres now
    //   console.log(carNumber, fuelNumber);
    //   const res = carNumber / fuelNumber;

    //   console.log(res);
    //   return res.toFixed(2);

    return null;
  };
