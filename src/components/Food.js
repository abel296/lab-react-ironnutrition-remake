import React from 'react';
import { Component } from "react";
import foodList from "../foods.json";
import { FoodList } from './FoodList';
import './Food.css'
import { Search } from './Search';

export class Food extends Component {
    
    constructor() {
        super()
        this.state = {
            foodList: [],
            search: ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ foodList })
        }, 1000)
    }

    filterFood(value) {
            const foodListFiltered = foodList.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({ foodList: foodListFiltered })
    }

    render() {
        return (
            <>
                <div class='container'>
                    <h1 class='title'>IronNutrition</h1>
                    <Search filterFood={ (value) => this.filterFood(value)}  />
                        <div class='columns'>
                            <div class='column food'>
                                <div class='food'>
                                    { this.state.foodList.length ? <FoodList foodList={ this.state.foodList } /> : <h1>Cargando</h1> }
                                </div>
                            </div>
                            <div class='column food'>
                                <h2>Today's food</h2>
                                <strong>Total: 0 cal</strong>
                            </div>
                        </div>
                </div>
            
            </>
        )
    }
}