import React, { Component } from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default class ImageGallery extends Component {
    render() {
        const {images} = this.props

        return(
            <ul className="ImageGallery">
                {images.map((el) => {
                    return(<ImageGalleryItem src = {el.webformatURL} key = {el.id} alt = {el.largeImageURL}/>)
                })}
            </ul>
        )
    }
}