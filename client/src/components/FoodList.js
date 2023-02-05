import React from 'react';
import FoodBox from './FoodBox';

export default function FoodList({ foodList, showFoodGif }) {
    return (
        foodList.map(elm => <FoodBox { ...elm } key={ elm.name } showFoodGif={ (gifState, name) => showFoodGif(gifState, name) } ></FoodBox>)
    )
}