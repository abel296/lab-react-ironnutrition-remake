import React from 'react';
import { Component } from "react";

export class Search extends Component {
    constructor() {
        super()
        this.state = {
            food: ''
        }
    }

    handleInputChange(e) {
        const {value} = e.target
        this.setState({ food: value }, () => this.props.filterFood(value))
    }

    render() {
        return (
            <>
                <div onSubmit={e => e.preventDefault() }>
                    <input type="text" className="input search-bar" name="search" placeholder="Search" value={ this.state.food } onChange={ (e) => this.handleInputChange(e) }></input>
                </div>
            </>
            
        )
    }
}