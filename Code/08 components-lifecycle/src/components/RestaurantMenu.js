import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log('before making api call');
    // const data = await fetch('http://localhost:3001/api/restaurants/resId');
    const data = await fetch(
      'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' +
        resId +
        '&catalog_qa=undefined&submitAction=ENTER'
    );
    const json = await data.json();
    setResInfo(json);
    console.log(
      `Restaurant Data for individual restaurant is ${JSON.stringify(json)}`
    );
  };
  if (resInfo == null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>dish</li>
        <li>dish</li>
        <li>dish</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
