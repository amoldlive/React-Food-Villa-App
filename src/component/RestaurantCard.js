import { productImgApi } from "./Constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  area,
}) => {
  return (
    <div className="card">
      <img alt="food image" src={productImgApi + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{avgRating} *</h5>
      <p>{cuisines.join(",")}</p>
      <h6>{area}</h6>
    </div>
  );
};

export default RestaurantCard;
