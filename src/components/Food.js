import React from 'react';
import { Component } from "react";
import foodList from "../foods.json";
import { FoodList } from './FoodList';

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
            this.state.foodList.length ? <FoodList foodList={this.state.foodList} /> : <h1>Cargando</h1>
        )
    }
}