import React from "react";
import AvailableMeal from "./AvailableMeal";
import MealSummary from "./MealSummary";

function Meals() {
  return (
    <React.Fragment>
      <MealSummary />
      <AvailableMeal />
    </React.Fragment>
  );
}

export default Meals;
