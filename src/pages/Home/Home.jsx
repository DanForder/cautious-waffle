import { useState } from "react";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputField from "../../components/InputField/InputField";
import Layout from "../../components/Layout/Layout";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import { getCostResult, getDistanceResult } from "../../utils/convertUtils";

const Home = () => {
  const [vehicleEfficiency, setVehicleEfficiency] = useLocalStorageState(
    "vehicle-pref",
    {
      distanceUnit: "Miles",
      liquidUnit: "Gallon",
      number: 40,
    }
  );
  const [fuelCost, setFuelCost] = useLocalStorageState("fuel-pref", {
    currencyUnit: "£",
    number: (1.5).toFixed(2),
    liquidUnit: "Litre",
  });
  const [costResult, setCostResult] = useState(null);
  const [distanceResult, setDistanceResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCostResult(
      getCostResult(
        vehicleEfficiency.number,
        vehicleEfficiency.liquidUnit,
        fuelCost.number,
        fuelCost.liquidUnit
      )
    );

    setDistanceResult(
      getDistanceResult(
        vehicleEfficiency.number,
        vehicleEfficiency.liquidUnit,
        fuelCost.number,
        fuelCost.liquidUnit
      )
    );
  };

  const getPropertyNameFromId = (id) => {
    if (id === "vehicle-efficiency-input" || id === "fuel-price")
      return "number";
    if (id === "distance-unit") return "distanceUnit";
    if (id === "currency-unit") return "currencyUnit";
    if (id.includes("liquid-unit")) return "liquidUnit";

    return null;
  };

  const handleUpdateState = (event, setStateFunction) => {
    const { id, value } = event.target;
    const propertyName = getPropertyNameFromId(id);

    setStateFunction((prevState) => {
      return { ...prevState, [propertyName]: value };
    });
  };

  return (
    <Layout>
      <h1>Fuel Cost Calculator</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "10px",
        }}
      >
        <p>My vehicle does...</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <InputField
            value={vehicleEfficiency.number}
            onChange={(e) => {
              handleUpdateState(e, setVehicleEfficiency);
            }}
            type="number"
            id="vehicle-efficiency-input"
            label="Vehicle Efficiency"
            hideLabel
          />
          <Dropdown
            value={vehicleEfficiency.distanceUnit}
            onChange={(e) => {
              handleUpdateState(e, setVehicleEfficiency);
            }}
            id="distance-unit"
            options={["Miles", "Kilometres"]}
            label="Distance Unit"
            hideLabel
          />
          <span>per</span>
          <Dropdown
            value={vehicleEfficiency.liquidUnit}
            onChange={(e) => {
              handleUpdateState(e, setVehicleEfficiency);
            }}
            id="liquid-unit-vehicle"
            options={["Gallon", "Litre"]}
            label="Liquid Unit"
            hideLabel
          />
        </div>

        <br />

        <p>The cost of fuel is...</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Dropdown
            onChange={(e) => {
              handleUpdateState(e, setFuelCost);
            }}
            value={fuelCost.currencyUnit}
            id="currency-unit"
            options={["£", "$"]}
            label="Currency Unit"
            hideLabel
          />
          <InputField
            onChange={(e) => {
              handleUpdateState(e, setFuelCost);
            }}
            value={fuelCost.number}
            type="number"
            id="fuel-price"
            label="Fuel Price"
            hideLabel
          />
          <span>per</span>
          <Dropdown
            onChange={(e) => {
              handleUpdateState(e, setFuelCost);
            }}
            value={fuelCost.liquidUnit}
            id="liquid-unit-fuel"
            options={["Litre", "Gallon"]}
            label="Liquid Unit"
            hideLabel
          />
        </div>

        <br />

        <Button label="Submit" type="submit" />
      </form>

      {costResult && (
        <>
          <p>
            Your fuel costs {fuelCost.currencyUnit}
            {costResult} per{" "}
            {vehicleEfficiency.distanceUnit
              .substring(0, vehicleEfficiency.distanceUnit.length - 1)
              .toLowerCase()}
          </p>
          <p>
            That&apos;s {fuelCost.currencyUnit}
            {(costResult * 100).toFixed(2)} every 100 miles
          </p>
        </>
      )}

      {distanceResult && (
        <p>
          Or for {fuelCost.currencyUnit}1, your vehicle can go {distanceResult}{" "}
          {vehicleEfficiency.distanceUnit.toLowerCase()}
        </p>
      )}
    </Layout>
  );
};

export default Home;
