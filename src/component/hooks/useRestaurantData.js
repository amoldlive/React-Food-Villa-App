import { useEffect, useState } from "react";
import { menuApi } from "../Constant";

const useRestaurantData = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState("");

  const menuEffect = useEffect(() => {
    getMenuDetails();
  }, []);

  async function getMenuDetails() {
    const menuapiwithid = menuApi + restaurantId;
    console.log(menuapiwithid);
    const menu = await fetch(menuapiwithid);
    const menuJson = await menu.json();
    /* console.log(menuJson); */
    setRestaurantInfo(menuJson?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      menuJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        .card?.card?.itemCards
    );
  }

  return { restaurantInfo, restaurantMenu };
};
export default useRestaurantData;
