import React, { Component } from 'react';

export default class Articles extends Component {

   render() {
       return(
           <ul>
               {this.props.mass.map(({title}) => {
                   return <li>{title}</li>
               })}
           </ul>
       )
   }
}