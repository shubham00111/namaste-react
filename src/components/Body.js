import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaraunts] = useState([]);
  const [filtererdListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getApiCall();
  }, []);

  async function getApiCall() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    setListOfRestaraunts(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const getFilteredData = (search, resList) => {
    return resList.filter((res) => {
      return res.data.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const handleOnSearch = (e) => {
    const filteredData = getFilteredData(searchInput, listOfRestaurants);
    setFilteredListOfRestaurants(filteredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-input">
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <div className="search-btn">
          <button onClick={handleOnSearch}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.length > 1 ? (
          filtererdListOfRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.data.id}`}>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
