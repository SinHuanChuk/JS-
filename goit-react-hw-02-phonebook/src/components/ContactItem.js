import React, { Component } from 'react';

export default class ContactItem extends Component {

    handleDelete = (e) => {
        this.props.handleDelete(e.target.closest('li').id)
    }

    render() {
        return(
            <li id = {this.props.id} key = {this.props.id}>
                <span>{this.props.name}: {this.props.number}</span>
                <button type = "button" onClick = {this.handleDelete}>delete</button>
            </li>
        )
    }
}