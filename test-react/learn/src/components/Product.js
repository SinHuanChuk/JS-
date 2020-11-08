import React from 'react';

const Product = ({imgUrl, name, price, quantity = ''}) => (
    <div>
      <img src = {imgUrl} alt = {name} width = '640'></img>
      <h2>name: {name}</h2>
      <p>price: {price}</p>
      <h2>Quantity: {quantity > 0
      ? `We have this food for you`
      : `we dont have this oops`}</h2>
      <button type = 'button'>Add to card</button>
    </div>
  )

export default Product