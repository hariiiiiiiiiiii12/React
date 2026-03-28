import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
// import resList from '../utils/mockData';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3001/api/restaurants'); // CALLING local Node JS Server
    const json = await data.json();
    // console.log(json);
    const swiggyLiveCards = json.data.cards;
    // console.log(`Swiggy Live Cards: ${swiggyLiveCards}`);
    let swiggyLiveRestaurantCards = [];

    swiggyLiveCards.forEach((element) => {
      if (element?.card?.card?.info?.id) {
        swiggyLiveRestaurantCards.push(element);
      }
    });
    // console.log(
    //   `swiggyLiveRestaurantCards: ${JSON.stringify(
    //     swiggyLiveRestaurantCards[0]
    //   )}`
    // );

    setListOfRestaurants(swiggyLiveRestaurantCards);
    setFilteredRestaurant(swiggyLiveRestaurantCards);
  };

  if (listOfRestaurants.length == 0) {
    // return <h1>Loading....</h1>;
    // console.log('Before calling shimmer');
    return <Shimmer />;
  }
  // console.log('Rendering restaurants:', listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // console.log(searchText);
              // console.log(
              //   `List of restaurants: ${JSON.stringify(listOfRestaurants)}`
              // );
              // console.log(
              //   `List of restaurants: ${listOfRestaurants[0].card.card.info.name}`
              // );
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredRestaurants);
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.card?.card?.info?.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
