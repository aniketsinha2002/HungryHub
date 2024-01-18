//NAMED IMPORT
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info; //optional chaining
     
    return (
        <div className="m-5 p-2 w-[231px] bg-0 flex flex-col transition duration-150 hover:scale-[.9]">
            <img className="w-[250px] h-[170px] rounded-2xl" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="font-semibold py-2 text-lg text-[#333333] whitespace-nowrap overflow-ellipsis overflow-hidden">{name}</h3>
            <h4 className="font-bold text-lg text-[#333333]">❇️{avgRating} • {sla.deliveryTime} mins</h4>
            <h4 className="text-[#333333]">{cuisines.join(", ")}</h4>
            {/* <h4>{costForTwo}</h4> */}
        </div>
    )
};

//HIGHER ORDER COMPONENT -> which will take these resturants as input and return me an enhanced resturant card

//input - All Resturant Card , O/p - Resturand Card promoted

export const withOpenLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute z-10 bg-black text-white m-2 px-2 py-1 rounded-sm" htmlFor="">OPEN</label>
                <ResturantCard {...props} />
           </div>
       )
    }
}

export default ResturantCard;