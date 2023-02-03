import React from 'react';
import FoodBox from './FoodBox';

export default function FoodList({ foodList }) {
    return (
        foodList.map(elm => <FoodBox { ...elm } key={ elm.name }></FoodBox>)
    )
}