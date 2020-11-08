import React, {Component} from 'react';
import MyClassComponent from './components/component'
import Counter from './components/counter'
import Vod from './components/vod';
import Login from './components/loginen'
import Checkbox from './components/checkbox'
import RadioBtn from './components/radio'

export default class App extends Component {

    render() {
        return ( 
        <div>
            <div>
                <MyClassComponent />
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <Vod />
            </div>
            <div>
                <Login />
            </div>
            <div>
                <Checkbox />
            </div>
            <div>
                <RadioBtn />
            </div>
        </div>
        )
    }
}