import { useState } from "react";

function filterRestaurant(restaurants, searchText) {
  console.log(searchText)
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}
const SearchBar = ({ restaurant ,setFilteredRestaurant}) => {
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
          setFilteredRestaurant(filterRestaurant(restaurant, searchText));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
