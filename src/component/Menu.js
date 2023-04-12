import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuApi, productImgApi } from "./Constant";
import Shimmer from "./Shimmer";
import useRestaurantData from "./hooks/useRestaurantData";
const Menu = () => {
  const { restaurantId } = useParams();
  const { restaurantInfo, restaurantMenu } = useRestaurantData(restaurantId);

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
