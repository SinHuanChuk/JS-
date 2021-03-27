import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchQuery: ''
    }

    handleChange = ({target}) => {
        this.setState({
            searchQuery: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.handleSearch(this.state.searchQuery)
    }

    render() {
        const { searchQuery } = this.state
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit = {this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value = {searchQuery}
                        onChange = {this.handleChange}/>
                </form>
            </header>
        )
    }
}