import { useState } from "react";

function filterRestaurant(restaurants, searchText) {
  console.log(searchText)
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
const SearchBar = ({ restaurant ,setFilteredRestaurant}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="mt-2">
      <input className="m-3"
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="bg-red-100 rounded-md w-20"
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
