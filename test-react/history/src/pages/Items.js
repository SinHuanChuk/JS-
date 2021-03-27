import axios from "axios";
import { Component } from "react";
import {Link, Route} from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading'

export default class Items extends Component {

    state = {
        name: '',
        img: [],
        pathname: {}
    }

    componentDidMount() {
        axios(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`)
        .then(({data}) => {
            this.setState({
                name: data.data.item.name,
                img: data.data.item.images.icon,
                pathname: this.props.match.url
            })
        })
    }

    render() {
        const {name, img, pathname} = this.state
        console.log(this.props)
        return(
            <div>
                <h1>{name}</h1>
                <img src = {img}/>
                <Link to ={`${pathname}/Reviews`}>Button</Link>
                <Route path = {`${pathname}/Reviews`} component = {Loadable({
                    loader: () => import('../pages/Reviews'),
                    loading: Loading
                })}/>

            </div>
        )
    }
}