import { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {

    render() {
        return(
            <div>
                <span>вы потерялись вот <Link to = '/'>ссылка</Link> на главную страницу</span>
            </div>
        )
    }
}