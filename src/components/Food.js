import React from 'react';
import { Component } from "react";
import foodList from "../foods.json";
import { FoodList } from './FoodList';
import './Food.css'

export class Food extends Component {
    
    constructor() {
        super()
        this.state = {
            foodList: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ foodList: foodList })
        }, 2000)
    }

    render() {
        return (
            <>
                <div class='food'>
                    <h1>IronNutrition</h1>
                    {this.state.foodList.length ? <FoodList foodList={this.state.foodList} /> : <h1>Cargando</h1>}
                </div>
            </>
        )
    }
}