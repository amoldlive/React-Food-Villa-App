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
      <h5 className="card-name">{name}</h5>
      <p className="card-avgrating">* {avgRating}</p>
      <p className="card-cuisines">{cuisines.join(" , ")}</p>
      <p className="card-area">{area}</p>
    </div>
  );
};

export default RestaurantCard;
