import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer';
// import ShimmerMenu from './ShimmerMenu';
import useResturantMenu from '../utils/useResturantMenu';
import RestaurantCategory from './RestaurantCategory';



const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resID} = useParams();
  // console.log(params.resID);
 
  const dummy = 'Dummy Data';
  
  //USING OWN CUSTOM HOOK TO FETCH DATA
  const resInfo = useResturantMenu(resID); 
  // console.log(resInfo);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const [showIndex, setshowIndex] = useState(0);

//   const fetchMenu = async () => {
//   try {
//     const data = await fetch(MENU_API + params.resID);
//     if (! data.ok) {
//       throw new Error(`HTTP error! Status: ${data.status}`);
//     }
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//   } catch (error) {
//     console.error("Error fetching menu:", error);
//   }
// };


  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    deliveryTime,
  } = resInfo?.cards[0]?.card?.card?.info;

  // console.log(resInfo?.cards[0]?.card?.card?.info);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg"> 
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category,index) => (
        // Controlled Component
        <RestaurantCategory data={category?.card?.card} showItems={index === showIndex ? true : false} setshowIndex={()=>setshowIndex(index)} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
