import React, { useEffect, useState } from 'react';
import foodList from "../foods.json";
import FoodList from './FoodList';
import './Food.css'
import Search from './Search';
import PickedFoodList from './PickedFoodList';

export default function Food() {
    const [foodState, setFoodState] = useState([])
    const [bigGifState, setBigGifState] = useState('')
    const [nameState, setNameState] = useState('')
    const [totalCaloriesState, setTotalCaloriesState] = useState(0)
    const [pickedFoodState, setPickedFoodState] = useState([])

    useEffect(() => setFoodState(foodList), [])

    function filterFood(value, setFoodState) {
        const foodListFiltered = foodList.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
        setFoodState(foodListFiltered)
    }

    function showFoodGif(gifState, name, setBigGifState, setNameState) {
        setNameState(name)
        setBigGifState(gifState)
    }

    function addPickedFood(name, calories, quantity) {
        const totalFoodCalories = calories * quantity
        const newPickedFoodState = [...pickedFoodState, {
            _id: new Date().getTime(),
            name,
            calories: totalFoodCalories,
            quantity
        }]
        setPickedFoodState(newPickedFoodState)
        const totalCalories = totalCaloriesState + totalFoodCalories
        setTotalCaloriesState(totalCalories)
    }

    return (
        <>
            <div className='container'>
                <h1 className='title'>IronNutrition</h1>
                <Search filterFood={ (value) => filterFood(value, setFoodState) } />
                <section className='columns'>
                    <div className='column food'>
                        <div className='food'>
                            { foodState.length
                                ? <FoodList
                                    foodList={ foodState }
                                    showFoodGif={ (gifState, name) => showFoodGif(gifState, name, setBigGifState, setNameState) }
                                    addPickedFood={ (name, calories, quantity) => addPickedFood(name, calories, quantity) } />
                                : <i>Cargando</i>
                            }
                        </div>
                    </div>
                    <div className='column food summary'>
                        <h2>Today's food</h2>
                        <ul className='food-added-list'>
                            { pickedFoodState.length > 0 && <PickedFoodList pickedFoodState={pickedFoodState}></PickedFoodList> }
                        </ul>
                        <p className='total-calories'>Total: { totalCaloriesState } cal</p>
                        <div className='gif-container-bigger'>
                            { bigGifState ? <img alt={ nameState } className='gif-bigger' src={ bigGifState } /> : undefined }
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}