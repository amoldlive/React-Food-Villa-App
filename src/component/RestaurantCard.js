import { productImgApi } from "./Constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  area,
}) => {
  return (
    <div className="w-60 h-64 p-5 drop-shadow-lg border-solid border-1 border-red-50 m-3 hover:border-2">
      <img className="h-20 w-60" alt="food image" src={productImgApi + cloudinaryImageId} />
      <h5 className="font-semibold text-base">{name}</h5>
      <p className="bg-green-200 w-10 rounded-md mb-2">* {avgRating}</p>
      <p className="text-sm font-extralight">{cuisines.join(" , ")}</p>
      <p className="font-medium">{area}</p>
    </div>
  );
};

export default RestaurantCard;
