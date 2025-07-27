import { useState, useContext } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";



const Heading = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using selector
  // const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 gap-8">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">Cart (0 items)</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {" "}
            {btnName}{" "}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
