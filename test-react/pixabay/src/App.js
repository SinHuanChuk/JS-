import React, { Component } from 'react';
import SearchBar from './Component/SearchBar/SearchBar'
import ImageGallery from './Component/ImageGallery/ImageGallery'
import { axiosImage } from './Component/GalleryApi/GalleryApi';
import Modal from './Component/Modal/Modal'
import Button from './Component/Button/Button'
import Loader from './Component/Loader/Loader'

export default class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false
  }

  createItem = () => {
    this.setState({loading: true})

    axiosImage(`${this.state.query}`, 1)
      .then(res => this.setState({
      images: res.data.hits
      })).finally(() => this.setState({loading: false}))
  }
  
  handleSearch = (value) => {
    this.setState({
      query: value
    }, this.createItem)
  }

  render(){
    const {images, loading} = this.state
    console.log(this.state.query)
    return (
     <div className = 'App'>
       <SearchBar handleSearch = {this.handleSearch}/>
       
       {loading && <Loader type="Circles"/>}

       <ImageGallery images = {images}/>
       <Button/>
     </div>
    )
  }
}