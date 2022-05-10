import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const [carEfficiency, setCarEfficiency] = useState({
    distanceUnit: "Miles",
    liquidUnit: "Gallon",
    number: 41.4,
  });
  const [fuelCost, setFuelCost] = useState({
    currencyUnit: "£",
    number: 1.55,
    liquidUnit: "Litre",
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(carEfficiency, fuelCost);
    setResult(67.6);
  };

  const getPropertyNameFromId = (id) => {
    if (id === "car-efficiency-input" || id === "fuel-price") return "number";
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
      <h1>Fuel Calculator</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "10px",
        }}
      >
        <p>My car does...</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Input
            value={carEfficiency.number}
            onChange={(e) => {
              handleUpdateState(e, setCarEfficiency);
            }}
            type="number"
            id="car-efficiency-input"
            label="Car Efficiency"
            hideLabel
          />
          <Dropdown
            value={carEfficiency.distanceUnit}
            onChange={(e) => {
              handleUpdateState(e, setCarEfficiency);
            }}
            id="distance-unit"
            options={["Miles", "Kilometres"]}
            label="Distance Unit"
            hideLabel
          />
          <span>per</span>
          <Dropdown
            value={carEfficiency.liquidUnit}
            onChange={(e) => {
              handleUpdateState(e, setCarEfficiency);
            }}
            id="liquid-unit-car"
            options={["Gallon", "Litre"]}
            label="Liquid Unit"
            hideLabel
          />
        </div>

        <br />
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
          <Input
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
            options={["Gallon", "Litre"]}
            label="Liquid Unit"
            hideLabel
          />
        </div>

        <br />
        <br />

        <button style={{ padding: "0.5rem" }} type="submit">
          Submit
        </button>
      </form>

      {result && (
        <p>
          Your car costs {fuelCost.currencyUnit}
          {result} per{" "}
          {carEfficiency.distanceUnit
            .substring(0, carEfficiency.distanceUnit.length - 1)
            .toLowerCase()}
        </p>
      )}
    </Layout>
  );
};

export default Home;
