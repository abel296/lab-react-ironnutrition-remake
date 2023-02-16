import React, { useEffect, useState } from 'react';
import getGifsService from '../services/getGifs.service';


export default function FoodBox({ name, calories, image, showFoodGif, addPickedFood }) {
    const [gifState, setGifState] = useState('')
    const [quantityState, setQuantityState] = useState(1)

    useEffect(() => {
        async function getGif() {
            try {
                setGifState(await getGifsService(name))
            } catch (error) {
                console.log(error)
            }
        }
        getGif()
    }, [name])

    function handleInputChange(e) {
        setQuantityState(e.currentTarget.value)
    }

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={ image } alt="" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{ name }</strong> <br />
                            <small>{ calories } cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={ quantityState } onChange={ e => handleInputChange(e) } />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={ e => {
                                showFoodGif(gifState, name)
                                addPickedFood(name, calories, quantityState)
                            } }>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}