import { useState, useEffect } from "react";

const useAllRestaurant = () => {
  const [listOfRestaurants, setListOfRestaraunts] = useState([]);

  useEffect(() => {
    getApiCall();
  }, []);

  async function getApiCall() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    setListOfRestaraunts(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  return listOfRestaurants;
};

export default useAllRestaurant;
