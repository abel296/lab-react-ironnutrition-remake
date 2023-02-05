import React, { useEffect, useState } from 'react';
import foodList from "../foods.json";
import FoodList from './FoodList';
import './Food.css'
import Search from './Search';

function filterFood(value, setFoodState) {
    const foodListFiltered = foodList.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
    setFoodState(foodListFiltered)
}

function showFoodGif(gifState, name, setBigGifState, setNameState) {
    setNameState(name)
    setBigGifState(gifState)
}

export default function Food() {
    const [foodState, setFoodState] = useState([])
    const [bigGifState, setBigGifState] = useState('')
    const [nameState, setNameState] = useState('')
    useEffect(() => setFoodState(foodList), [])

    return (
        <>
            <div className='container'>
                <h1 className='title'>IronNutrition</h1>
                <Search filterFood={ (value) => filterFood(value, setFoodState) } />
                <section className='columns'>
                    <div className='column food'>
                        <div className='food'>
                            { foodState.length ? <FoodList foodList={ foodState } showFoodGif={ (gifState, name) => showFoodGif(gifState, name, setBigGifState, setNameState) }/> : <i>Cargando</i> }
                        </div>
                    </div>
                    <div className='column food'>
                        <h2>Today's food</h2>
                        <strong>Total: 0 cal</strong>
                        <div className='gif-container-bigger'>
                            { bigGifState ? <img alt={ nameState } className='gif-bigger' src={ bigGifState } /> : undefined }
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}