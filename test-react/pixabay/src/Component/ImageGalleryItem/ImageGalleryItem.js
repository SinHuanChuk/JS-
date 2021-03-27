import React, { Component } from 'react'

export default class ImageGalleryItem extends Component {
    render() {
        return(
            <li className="ImageGalleryItem">
                <img key = {this.props.key} src={this.props.src} alt={this.props.alt} className="ImageGalleryItem-image" />
            </li>
        )
    }
}