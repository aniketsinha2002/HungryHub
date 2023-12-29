//NAMED IMPORT
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

//HEADER COMPONENT
const Header = () => {

    //NORMAL JS VAR vs REACT STATE VAR
    //this will rerender this whole header component with the new value - logout which a normal JS var can't do

    let btnName = "Login";
    const [btnNameReact, setbtnNameReact] = useState("Login");
    //HOW WE're updating this const var in state var ? Hpw can a const var can get updated with a new value ? Isn't this defeating JS principle ?
    // Its calling this function once again / re rendering with the new updated value, this btnNamereact is a new var after re rendering with the new value

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact==="Login" ?setbtnNameReact ("Logout"):setbtnNameReact ("Login");
                    }}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
)};

export default Header;