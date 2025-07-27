import { CDN_URL } from "../utility/constants";

const ItemList = ({ listData }) => {
  return (
    <div>
      {listData.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between border-b-1 border-gray-300 m-4 p-4">
          <div className="text-left mx-1 px-1 mt-2 w-8/12">
            <h1 className="font-bold text-gray-700 text-lg">{item?.card?.info?.name}</h1>
            <h3 className="font-bold">₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</h3>
            <p className="text-gray-500 font-semibold py-2">{item?.card?.info?.description}</p>
          </div>
          <div>
            {/* <button className="absolute bg-black text-white rounded-lg w-18 p-2 mt-[120px] place-items-center ">ADD +</button> */}
            <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-lg w-[156px] h-[144px] object-cover"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
