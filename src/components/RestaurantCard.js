import { CDN_URL } from "../utility/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="transition-transform duration-300 transform hover:scale-95 p-4 bg-white w-[300px]">
      <img className="w-[300px] h-[180px] mb-4 object-cover rounded-lg" src={ CDN_URL + resData.info.cloudinaryImageId} 
      alt="card-img"></img>
      <h3 className="font-bold pb-2">{name}</h3>
      <h5 className=" text-gray-500">{cuisines.join(", ")}</h5>
      <h5 className=" text-gray-500">{avgRating} stars</h5>
      <h5 className=" text-gray-500">{deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;