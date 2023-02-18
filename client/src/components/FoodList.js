import FoodBox from './FoodBox';

export default function FoodList({ foodList, showFoodGif, addPickedFood }) {
    return (
        foodList.map(elm => <FoodBox
            { ...elm }
            key={ elm.name }
            showFoodGif={ (gifState, name) => showFoodGif(gifState, name) }
            addPickedFood={ (name, calories, quantity) => addPickedFood(name, calories, quantity) }/>)
    )
}