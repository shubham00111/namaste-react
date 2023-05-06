import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { getFilteredData } from "../utils/Util";
import useOnline from "../utils/useOnline";
import useAllRestaurant from "../utils/useAllRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const listOfRestaurants = useAllRestaurant();

  const [filtererdListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredListOfRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleOnSearch = (e) => {
    const filteredData = getFilteredData(searchInput, listOfRestaurants);
    setFilteredListOfRestaurants(filteredData);
  };

  const online = useOnline();

  const { user, setUser } = useContext(UserContext);

  if (!online) {
    return <h1>Looks like you have no internet Connection!!</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-input flex gap-2 p-3 bg-pink-50">
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <div className="search-btn ">
            <button
              className=" bg-purple-700 text-white p-2 rounded-md"
              onClick={handleOnSearch}
            >
              Search
            </button>
          </div>
          <div>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-5 p-3">
        {listOfRestaurants.length > 1 ? (
          filtererdListOfRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <RestaurantCard resData={restaurant} />
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
