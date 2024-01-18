//NAMED IMPORT
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

//HEADER COMPONENT
const Header = () => {

    //NORMAL JS VAR vs REACT STATE VAR
    //this will rerender this whole header component with the new value - logout which a normal JS var can't do

    let btnName = "Login";
    const [btnNameReact, setbtnNameReact] = useState("Login");
    //HOW WE're updating this const var in state var ? Hpw can a const var can get updated with a new value ? Isn't this defeating JS principle ?
    // Its calling this function once again / re rendering with the new updated value, this btnNamereact is a new var after re rendering with the new value

    const onlineStatus = useOnlineStatus();

    //UserContext comes from UserContext.js file
    //useContext is Hook

    const { loggedInUser } = useContext(UserContext);
    

    //Subscribing to the store using our selector - hook | CART
    const cartItems = useSelector((store)=>store.cart.items);

    return (
    <div className="flex justify-between bg-pink-00 shadow-lg m-0">
        <div className="logo-container">
            <img className="m-0 px-5 w-[8.5rem]" src={LOGO_URL} alt="" />
        </div>
        
        <div className="nav-items flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status:{onlineStatus?"✅":"🟥"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/About">About Us</Link></li>
                <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/Grocery" >Grocery</Link></li>
                
                <li className="px-4"><Link to="/cart" >Cart - ({cartItems.length} items)</Link></li>
                
                <button className="login" onClick={() => {
                    btnNameReact==="Login" ?setbtnNameReact ("Logout"):setbtnNameReact ("Login");
                }}>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
)};

export default Header;