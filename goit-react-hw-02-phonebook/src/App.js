import React, { Component } from 'react';
import CreateElement from './components/CreateElement'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import shortid from 'shortid'

export default class App extends Component {
  state = {
    contacts: [
      {id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12'},
      {id: shortid.generate(), name: 'Eden Clements', number: '645-17-79'},
      {id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: ''
  }

  handleChangeName = (value) => {

    this.setState({
      name: value
    })
  }

  handleSubmit = (value1, value2) => {
    if(this.state.contacts.map(el => el.name.toLowerCase()).includes(value1.toLowerCase())) {
      return alert(`${value1} уже есть`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {id: shortid.generate(), name: value1, number: value2}],
        name: '',
        number: ''
      }))
    }
  }

  handleChangeNumber = (value) => {

    this.setState({
      number: value
    })
  }

  handleFilter = (value) => {

    this.setState({
      filter: value.toLowerCase()
    })
  }

  handleDelete = (value) => {
    const arr = this.state.contacts.findIndex(el => el.id.includes(value))
    const delElem = this.state.contacts
    delElem.splice(arr, 1)

    this.setState({
      contacts: [...delElem]
    })

    console.log(delElem.splice(arr, 1))
  }

  render() {
    
    return(
      <div>
        <CreateElement handleSubmit = {this.handleSubmit} handleChangeNumber = {this.handleChangeNumber} handleChangeName = {this.handleChangeName}  name = {this.state.name} number = {this.state.number}/>
        <h3>Contacts</h3>
        <Filter handleFilter = {this.handleFilter} filter = {this.state.filter}/>
        <ContactList handleDelete = {this.handleDelete} contacts = {this.state.contacts} filter = {this.state.filter}/>
      </div>
    )
  }
}