//NAMED IMPORT
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info; //optional chaining
     
    return (
        <div className="res-card">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default ResturantCard;