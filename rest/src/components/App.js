import React, { Component } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default class App extends Component {

    state = {
        articles: []
    }

    // componentDidMount() { 
    //     axios.get('http://hn.algolia.com/api/v1/search?query=react&page=0&hitsPerPage=5')
    //     .then((res) => {
    //        this.setState({
    //            articles: res.data.hits
    //        })
    //     })
    // }

    bits = (num) => {
        const nums = `${num}`.split('').map(Number)

        const reducer = (elem) => {
            return elem.reduce((acc, value) => {
            let answer = acc * value

              if(answer > 9) {
                `${answer}`.split('').map(Number).reduce((acc, value) => {
                return answer = acc * value
                }, 1)
             }

            return answer
        }, 1)}
        return reducer(nums)
    }


    render() {
        console.log(this.bits(55))
        console.log(this.bits(123456789))
        console.log(this.bits(258))
        console.log(this.bits(99999999))
        const {articles} = this.state
        return <ul>
            {articles.map((value) => {
            return <li key = {value.objectID}>{value.title}</li>})}
        </ul>
           
        
    }
}