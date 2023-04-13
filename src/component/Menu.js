import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuApi, productImgApi } from "./Constant";
import Shimmer from "./Shimmer";
import useRestaurantData from "./hooks/useRestaurantData";
const getPrice=(price)=>{
  return price.toString().substring(0,2);
}
const Menu = () => {
  const { restaurantId } = useParams();
  const { restaurantInfo, restaurantMenu } = useRestaurantData(restaurantId);

  return restaurantInfo.length === 0 || restaurantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="m-5">
        <div>
          <h4 className="font-bold">{restaurantInfo.name}</h4>
          <p className="font-extralight">{restaurantInfo.id}</p>
          <p className="font-light">
            {restaurantInfo.locality +
              " , " +
              restaurantInfo.areaName +
              " , " +
              restaurantInfo.city}
          </p>
          <p className="text-red-600">{restaurantInfo.cuisines}</p>
        </div>
        <div>
          <p>
            Cost For Two - &#8377; &nbsp;
            {restaurantInfo.costForTwo.substring(0, 3)}
          </p>
        </div>
      </div>
      <div className="m-5">
        <h4 className="font-bold">Menu</h4>
        <div className="drop-shadow-lg">
          {restaurantMenu.map((e) => (
            <div key={e?.card?.info?.id} className="menu-tab">
              <div>
                <img
                  className="w-60 h-28"
                  src={productImgApi + e?.card?.info?.imageId}
                  alt="product-image"
                />
               </div>
              <div className="flex mb-5">
                <p className="bg-yellow-300 w-32 "  key={e?.card?.info?.name}>{e?.card?.info?.name}</p>
                <p className="bg-green-300 text-right w-28 mr-3" key={e?.card?.info?.price}> &#8377; &nbsp; {getPrice(e?.card?.info?.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
