import React, { Component } from 'react';

export default class Filter extends Component {

    handleFilter = (e) => {
        e.preventDefault()

        this.props.handleFilter(e.target.value)
    }

    render() {
        return (<input type = 'text' placeholder = 'find your contact' onChange = {this.handleFilter} value = {this.props.filter}></input>)
    }
}