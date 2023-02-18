import React from 'react';

export default function PickedFoodList({ pickedFoodState }) {
    return (
        pickedFoodState.map(elm => <li key={ elm._id }> { elm.quantity } { elm.name } = { elm.calories } calories </li>)
    )
}