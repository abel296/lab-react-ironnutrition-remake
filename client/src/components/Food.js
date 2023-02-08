import React, { useEffect, useState } from 'react';
import foodList from "../foods.json";
import FoodList from './FoodList';
import './Food.css'
import Search from './Search';

export default function Food() {
    const [foodState, setFoodState] = useState([])
    const [bigGifState, setBigGifState] = useState('')
    const [nameState, setNameState] = useState('')
    useEffect(() => setFoodState(foodList), [])

    function filterFood(value, setFoodState) {
        const foodListFiltered = foodList.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
        setFoodState(foodListFiltered)
    }

    function showFoodGif(gifState, name, setBigGifState, setNameState) {
        setNameState(name)
        setBigGifState(gifState)
    }

    function addFoodToTodaysFood(totalFoodCalories, quantity, name) {
        const todayFoodlist = document.querySelector('.food-added-list')
        const foodPicked = `<li> ${ quantity } ${ name } = ${ totalFoodCalories } calories </li>`
        todayFoodlist.innerHTML += foodPicked
    }

    function addFoodCaloriesToTotal(totalFoodCalories) {
        const caloriesTotal = document.querySelector('.total-calories')
        const currentCaloriesTotal = Number(document.querySelector('.total-calories').innerHTML.split(' ')[1])
        const totalWithNewCaloriesAdded = currentCaloriesTotal + totalFoodCalories
        caloriesTotal.innerText = `Total: ${ totalWithNewCaloriesAdded } cal`
    }

    function addPickedFood(name, calories, quantity) {
        const totalFoodCalories = calories * quantity
        addFoodToTodaysFood(totalFoodCalories, quantity, name)
        addFoodCaloriesToTotal(totalFoodCalories)
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
                                    addPickedFood={ (name, calories, quantity) => addPickedFood(name, calories, quantity) }/>
                                : <i>Cargando</i>
                            }
                        </div>
                    </div>
                    <div className='column food summary'>
                        <h2>Today's food</h2>
                        <ul className='food-added-list'></ul>
                        <p className='total-calories'>Total: 0 cal</p>
                        <div className='gif-container-bigger'>
                            { bigGifState ? <img alt={ nameState } className='gif-bigger' src={ bigGifState } /> : undefined }
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}