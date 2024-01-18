import ResturantCard,{withOpenLabel} from "./ResturantCard.js";
import mockData from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Shimmer from "../components/Shimmer.js";
               
const Body = () => {
    //USE STATE HOOK -> Why use state var instead of normal JS var?
    //Dynamic change of UI
    //Local state variable - super powerful variable
    const [ListofResturants, setListofResturants] = useState([]);
    const [FilteredResturants, setFilteredResturants] = useState([]);

    const [SearchText, setSearchText] = useState("");

    const ResturantCardOpen = withOpenLabel(ResturantCard);

    //USE EFFECT HOOK
    //Page Loads -> Skeleton Render -> API call -> Re Render
    //Local effect variable - super powerful variable
    useEffect(() => { fetchData(); }, []);

    //SWIGGY's API CALL
    const fetchData = async () => { 
    try {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json() ;

        // Ensure the data structure is as expected
        //OPTIONAL CHAINING
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [ ];

        console.log(json?.data);
        // console.log(mockData);
        
        setListofResturants(restaurants);
        setFilteredResturants(restaurants);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }};


    //CUSTOM HOOK FOR ONLINE STATUS
    const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus);

    if (onlineStatus === false)
        return <h1>Looks like u r offline</h1>;

    
    
    //SHIMMER UI EFFECT -> CONDITIONAL RENDERING
    if (ListofResturants.length === 0) {
        return <Shimmer/>;
    }
   
    //BODY COMPONENT
    return (
    <div className="body">
        <div className="filter flex">
            
                
                    <div className="search m-4 py-0 px-[83px]">
                    <input type="text"
                        placeholder="⌕ Search..."
                    className="px-4 py-2 m-4 border-2 border-[#333333b4] rounded-md"
                    value={SearchText}
                    onChange={(e) => {
                        const searchText = e.target.value;
                        setSearchText(searchText);

                        // Filter the restaurant cards and update the UI dynamically
                        const filteredList = ListofResturants.filter(res =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredResturants(filteredList);
                        // console.log(filteredList);
                    }}
                />
                {/* <button
                    className="px-4 py-2 m-4 bg-[#FC8019] rounded-sm text-white uppercase font-bold"
                    onClick={() => {
                        // Perform any additional actions on search button click
                    }}
                >
                    Search
                </button> */}
            </div>

            
            <div className="search m-4 p-0 flex items-center">
                <button className="px-4 py-2 m-4  bg-[#FC8019] rounded-sm text-white uppercase font-bold" onClick={() => {
                    //LOGIC-- FILTER
                    //Dynamic change of UI
                    let filteredList = ListofResturants.filter(res => res.info.avgRating > 4.4);
                    console.log(filteredList);
                    setFilteredResturants(filteredList);
                }}
                >Top rated Resturants</button>
            </div>
            
        </div>
        
            
        <div className="flex flex-wrap px-20">
            {/* <ResturantCard resData={resList[0]}/>
            <ResturantCard resData={resList[1]}/>
            <ResturantCard resData={resList[2]}/>
            <ResturantCard resData={resList[3]}/>
            <ResturantCard resData={resList[4]} />
            <ResturantCard resData={resList[5]} />
            <ResturantCard resData={resList[6]} />
            <ResturantCard resData={resList[7]} />
            <ResturantCard resData={resList[8]}/> */}
            
            {
                //MAP LOGIC (LOOPING and printing)
                FilteredResturants.map(resturant => (
                    <Link to={"/resturants/" + resturant.info.id}>
                        
                        {/** If a Resturant is isOpen add an isOpen label to it*/}
                        
                        {
                            resturant.info.isOpen ? (<ResturantCardOpen key={resturant.info.id} resData={resturant} />) : (<ResturantCard key={resturant.info.id} resData={resturant} />)
                        }
                    </Link>
                ))
            }
        </div>

        
    </div>
)};
 

export default Body;