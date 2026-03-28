import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);  // EACH RestaurantCategory like Recommended, Newly Added have their own state variables.
  console.log('Received Category is ', props);

  const handleClick = () => {
    //setShowItems(!showItems);
    props.setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {props.data.title} ({props.data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {props.showItems && <ItemList data={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
