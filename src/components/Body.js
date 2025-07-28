import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utility/UserContext";

const Body = () => {
  //local state variable - super powerfull variable using useState hook
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  const { loggedInUser, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData  = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7039849&lng=76.9009191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  if(filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <input 
          type="text" 
          placeholder="Search here..."
          className="border border-solid border-black rounded-md my-3 ml-2 px-2"
          value={searchText} 
          onChange={(e) => {
            setsearchText(e.target.value);
          }} />
        <button 
          className="bg-green-200 px-2 m-3 h-8 rounded-md cursor-pointer hover:shadow-lg hover:bg-green-300"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));

            setfilteredRestaurants(filteredRestaurants);
          }}
          >Search</button>
        <button
          className="bg-green-200 px-2 m-3 h-8 ml-12 rounded-md cursor-pointer hover:shadow-lg hover:bg-green-300"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurants(filterList);
          }}
        >
          Filter Top Restaurants
        </button>
        <div className="ml-2">
          <label>UserName: </label>
          <input className="border border-solid border-black rounded-md my-4 ml-2 px-2"
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
