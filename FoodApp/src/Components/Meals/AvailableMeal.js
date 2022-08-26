import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeal.module.css";

function AvailableMeal() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Biryani",
      description: "Finest Chicken and Spices",
      price: 100.00,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 200.00,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 65.00,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 500.00,
    },
  ];

  const listOfMeals = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{listOfMeals}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeal;
