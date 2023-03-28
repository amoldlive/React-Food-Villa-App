import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "./Constant";
import { useState } from "react";

function filterRestaurant(restaurants, searchText) {
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantData);

  return (
    <>
      <hr />
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={()=> {
            setRestaurant(filterRestaurant(restaurant, searchText));
        }}>
          Search
        </button>
      </div>
      <div className="cards">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
