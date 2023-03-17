import { useEffect, useState } from 'react';
import foodList from "../foods.json";
import FoodList from './FoodList';
import './Food.css'
import Search from './Search';
import PickedFoodList from './PickedFoodList';
import getGifsService from '../services/getGifs.service';

export default function Food() {
    const [foodState, setFoodState] = useState()
    const [bigGifState, setBigGifState] = useState('')
    const [nameState, setNameState] = useState('')
    const [totalCaloriesState, setTotalCaloriesState] = useState(0)
    const [pickedFoodState, setPickedFoodState] = useState([])
    const [loaderState, setLoaderState] = useState(false)

    useEffect(() => setFoodState(foodList), [])

    function filterFood(inputText) {
        const foodListFiltered = foodList.filter(elm => elm.name.toLowerCase().includes(inputText.toLowerCase()))
        setFoodState(foodListFiltered)
    }

    async function showFoodGif(gifState, name, setBigGifState, setNameState) {
        showLoader()
        setNameState(name)
        if (gifState) {
            setBigGifState(gifState)
            setLoaderState(false)
        } else {
            setBigGifState(await getGifsService(name))
            setLoaderState(false)
        }
    }

    function showLoader() {
        if (!bigGifState && pickedFoodState !== []) {
            setLoaderState(true)
        }
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
                <h1 className='title'>Nutrition List</h1>
                <Search filterFood={ (value) => filterFood(value, setFoodState) } />
                <section className='columns'>
                    <div className='column food'>
                        <div className='food'>
                            { foodState?.length === 0 ? <i>There is no results</i>
                                : foodState ? <FoodList
                                    foodList={ foodState }
                                    showFoodGif={ (gifState, name) => showFoodGif(gifState, name, setBigGifState, setNameState) }
                                    addPickedFood={ (name, calories, quantity) => addPickedFood(name, calories, quantity) } />
                                    : <i>Loading</i>
                            }
                        </div>
                    </div>
                    <div className='column food summary'>
                        <h2>Today's food</h2>
                        <ul className='food-added-list'>
                            { pickedFoodState.length > 0 && <PickedFoodList pickedFoodState={ pickedFoodState }></PickedFoodList> }
                        </ul>
                        <p className='total-calories'>Total: { totalCaloriesState } cal</p>
                        <div className='gif-container-bigger'>
                            { loaderState && <i>Loading gif</i> }
                            { bigGifState && <img alt={ nameState } className='gif-bigger' src={ bigGifState } /> }
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}