import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //Custom Hook

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   console.log('before making api call');
  //   // const data = await fetch('http://localhost:3001/api/restaurants/resId');
  //   const data = await fetch(
  //     'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' +
  //       resId +
  //       '&catalog_qa=undefined&submitAction=ENTER'
  //   );
  //   const json = await data.json();
  //   setResInfo(json);
  //   console.log(
  //     `Restaurant Data for individual restaurant is ${JSON.stringify(json)}`
  //   );
  // };
  if (resInfo == null) {
    return <Shimmer />;
  }

  // const cardArray = resInfo?.data?.cards.filter((c) => {
  //   return c.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
  // });

  // console.log('Card Array ', cardArray);

  const itemCategoryCards = [];

  resInfo?.data?.cards.forEach((cardObj) => {
    if (cardObj.groupedCard?.cardGroupMap?.REGULAR?.cards) {
      cardObj.groupedCard.cardGroupMap.REGULAR.cards.forEach((innerCard) => {
        if (
          innerCard.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        ) {
          itemCategoryCards.push(innerCard.card.card);
        }
      });
    }
  });

  console.log('itemCategoryCards', itemCategoryCards);

  // const categories1 = cardArray.filter((c) => {
  //   return c.card
  // });

  // console.log('Categories1 ', categories1);

  // const categories2 = categories1.filter((c) => {
  //   return c.groupedCard;
  // });

  // console.log('Categories 2', categories2);

  return (
    <div className="menu">
      <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      {/* {console.log(resInfo?.data?.cards[2]?.card?.card?.info?.name)} */}
      {/* {console.log(resInfo?.data.cards)} */}
      {/* <h2>Menu</h2>
      <ul>
        <li>dish</li>
        <li>dish</li>
        <li>dish</li>
      </ul> */}
      {itemCategoryCards.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.categoryId}
            data={category}
            showItems={index == showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
