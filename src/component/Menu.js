import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuApi, productImgApi } from "./Constant";
import Shimmer from "./Shimmer";
const Menu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState("");
  const { restaurantId } = useParams();

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

  return restaurantInfo.length === 0 || restaurantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-info-menu">
      <div className="restaurant-info">
        <div className="restaurant-info-details">
          <h4>{restaurantInfo.name}</h4>
          <p>{restaurantInfo.id}</p>
          <p>
            {restaurantInfo.locality +
              " , " +
              restaurantInfo.areaName +
              " , " +
              restaurantInfo.city}
          </p>
          <p style={{ color: "red" }}>{restaurantInfo.cuisines}</p>
        </div>
        <div>
          <p>
            Cost For Two - &#8377; &nbsp;
            {restaurantInfo.costForTwo.substring(0, 3)}
          </p>
        </div>
      </div>
      <div className="restaurant-info-menu-details">
        <h4>Menu</h4>
        <div className="menu-list">
          {restaurantMenu.map((e) => (
            <div key={e?.card?.info?.id} className="menu-tab">
              <div className="menu-tab-info">
                <p key={e?.card?.info?.name}>{e?.card?.info?.name}</p>
                <p key={e?.card?.info?.price}>{e?.card?.info?.price}</p>
              </div>
              <div>
                <img
                  src={productImgApi + e?.card?.info?.imageId}
                  alt="product-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
