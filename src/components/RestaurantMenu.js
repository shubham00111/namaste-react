import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurant(resId);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };

  if (!restaurantData) {
    return <Shimmer />;
  }
  console.log(restaurantData);
  const {
    name,
    id,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    avgRating,
  } = restaurantData?.data?.cards[0]?.card?.card?.info;
  return (
    <div>
      <h1>
        {name} id:{id}
      </h1>
      <h2>City: {city}</h2>
      <img src={CDN_URL + cloudinaryImageId} alt="" />
      <h2>{costForTwoMessage}</h2>
      <button className="p-2 m-2 bg-green-200" onClick={handleAddItem}>
        Add Item
      </button>
      <h2>Cuisines:{cuisines.join(", ")}</h2>
      <h2>Rating: {avgRating}</h2>
    </div>
  );
};

export default RestaurantMenu;
