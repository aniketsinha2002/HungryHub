import ResturantCard from "./ResturantCard.js";
import { useEffect, useState } from "react";

import Shimmer from "../components/Shimmer.js";
               
const Body = () => {
    //USE STATE HOOK -> Why use state var instead of normal JS var?
    //Dynamic change of UI
    //Local state variable - super powerful variable
    const [ListofResturants, setListofResturants] = useState([]);
    const [FilteredResturants, setFilteredResturants] = useState([]);

    const [SearchText, setSearchText] = useState("");

    
    //USE EFFECT HOOK
    //Page Loads -> Skeleton Render -> API call -> Re Render
    //Local effect variable - super powerful variable
    useEffect(() => { fetchData(); }, []);

    //SWIGGY's API CALL
    const fetchData = async () => { 
    try {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // Ensure the data structure is as expected
        //OPTIONAL CHAINING
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListofResturants(restaurants);
        setFilteredResturants(restaurants);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }};

    //SHIMMER UI EFFECT -> CONDITIONAL RENDERING
    if (ListofResturants.length === 0) {
        return <Shimmer/>;
    }
   
    //BODY COMPONENT
    return (
    <div className="body">
        <div className="filter">
            
                
            <div className="search">
                    <input type="text" className="search-box" value={SearchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        //filter the resturant cards and update the UI
                        //search text
                        // console.log(SearchText);
                        //LOGIC-- FILTER
                        //Dynamic change of UI
                        let filteredList = ListofResturants.filter(res => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));

                        setFilteredResturants(filteredList);

                        console.log(filteredList);
                    }}>search</button>
            </div>
            
            
            <button className="filter-btn" onClick={() => {
                    //LOGIC-- FILTER
                    //Dynamic change of UI
                    const filteredList = ListofResturants.filter(res => res.info.avgRating > 4.3);

                    setListofResturants(filteredList);
            }}
            >Top rated Resturants</button>
        </div>
        
            
        <div className="res-container">
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
                FilteredResturants.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant} />)
            }
        </div>
        
    </div>
)};


export default Body;