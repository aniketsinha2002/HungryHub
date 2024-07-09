import React, { useEffect, useState, useRef } from "react";
import RestaurantCard, { withOpenLabel } from "./ResturantCard";
import mockData from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1); // Track page number for infinite scroll

  const ResturantCardOpen = withOpenLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  // Ref for the bottom of the list to trigger infinite scroll
  const bottomOfListRef = useRef();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]); // Fetch data when pageNumber changes

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${pageNumber}`
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants((prev) => [...prev, ...restaurants]); // Append new data
      setFilteredRestaurants((prev) => [...prev, ...restaurants]); // Append to filtered list as well
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle scroll event for infinite scroll
  const handleScroll = () => {
    if (
      bottomOfListRef.current &&
      bottomOfListRef.current.getBoundingClientRect().bottom <=
        window.innerHeight
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1); // Increment page number to fetch next page
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!onlineStatus) return <h1>Looks like you're offline</h1>;

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 py-0 px-[83px]">
          <input
            type="text"
            placeholder="⌕ Search..."
            className="px-4 py-2 m-4 border-2 border-[#333333b4] rounded-md"
            value={searchText}
            onChange={(e) => {
              const searchText = e.target.value;
              setSearchText(searchText);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          />
        </div>

        <div className="search m-4 p-0 flex items-center">
          <button
            className="px-4 py-2 m-4  bg-[#FC8019] rounded-sm text-white uppercase font-bold"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap px-20">
        {filteredRestaurants.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.isOpen ? (
              <ResturantCardOpen
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
            {index === filteredRestaurants.length - 1 && (
              <div ref={bottomOfListRef} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
