import RestaurantCard from "./RestaurantCard";
import {swiggyApi } from "./Constant";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.js";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggyApi);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <hr />
      <SearchBar restaurant={restaurant} setRestaurant={setRestaurant} />
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
