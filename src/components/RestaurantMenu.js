import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID); //Custom Hook

  const [ showIndex, setShowIndex ] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ;
      // return (
      //   type ===
      //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      //   type ===
      //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      // );
    });
  return (
    <div className="text-center">
      <h1 className="my-6 font-extrabold text-3xl">{name}</h1>
      <p className="font-bold text-lg text-gray-500">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.categoryId}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
