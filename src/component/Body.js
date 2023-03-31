import RestaurantCard from "./RestaurantCard";
import { swiggyApi } from "./Constant";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.js";
import ShimmerUi from "./Shimmer";
import NoRestaurantFound from "./NoRestaurantFound";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    console.log(json);
    const restaurantJsonData = json?.data?.cards[2]?.data?.data?.cards;
    console.log(restaurantJsonData);
    setRestaurant(restaurantJsonData);
    setFilteredRestaurant(restaurantJsonData);
  }

  return restaurant.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <SearchBar
        restaurant={restaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />
      <div className="cards">
        { (filteredRestaurant.length===0) ? <NoRestaurantFound/> :
         (filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        }))}
      </div>
    </>
  );
};

export default Body;
