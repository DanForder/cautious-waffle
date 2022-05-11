export const distanceGallonsToLitres = (distance) => distance / 4.546;
export const distanceLitresToGallons = (distance) => distance * 4.546;

export const getCostResult = (carNumber, carUnit, fuelNumber, fuelUnit) => {
  if (carUnit === "Gallon") carNumber = distanceGallonsToLitres(carNumber);
  if (fuelUnit === "Gallon") fuelNumber = distanceGallonsToLitres(fuelNumber);

  return (fuelNumber / carNumber).toFixed(4);
};

export const getDistanceResult = (carNumber, carUnit, fuelNumber, fuelUnit) => {
  if (carUnit === "Gallon") carNumber = distanceGallonsToLitres(carNumber);
  if (fuelUnit === "Gallon") fuelNumber = distanceGallonsToLitres(fuelNumber);

  return (carNumber / fuelNumber).toFixed(2);
};
