import React, { Component } from 'react';
import ContactItem from './ContactItem'

export default class ContactList extends Component {

    render() {
        return(
            <ul>
                {this.props.contacts.filter(el => el.name.toLowerCase().includes(this.props.filter)).map(el => <ContactItem handleDelete = {this.props.handleDelete} name = {el.name}  number = {el.number} id = {el.id}/>)}
            </ul>
        )
    }
}