import { useState } from "react";

function filterRestaurant(restaurants, searchText) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}
const SearchBar = ({ restaurant, setRestaurant }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setRestaurant(filterRestaurant(restaurant, searchText));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
