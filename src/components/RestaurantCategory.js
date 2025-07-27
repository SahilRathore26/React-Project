import ItemList from "./ItemList";
// import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [ showItem, setshowItem ] = useState(false);

  const handleClick = () => {
    // setshowItem(!showItem);
    setShowIndex();
  };
  
  return (
    <div className="w-7/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data?.title}
          {data?.itemCards?.length ? `(${data.itemCards.length})` : ""}
        </span>
        <span className="font-bold">V</span>
        {/*Accordion Body*/}
      </div>
      { showItem && <ItemList listData={data.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
