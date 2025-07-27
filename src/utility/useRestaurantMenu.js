import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resID) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resID);
    const json = await data.json();

    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;