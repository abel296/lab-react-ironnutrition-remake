import React from 'react';
import { FoodBox } from './FoodBox';

export const FoodList = ({foodList}) => {
    return (
        foodList.map(elm => <FoodBox { ...elm } key={ elm.name }></FoodBox>)
    )
}