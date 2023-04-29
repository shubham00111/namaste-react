import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const response = await data.json();
    console.log(response);
    setRestaurant(response);
  }

  return restaurant;
};

export default useRestaurant;
