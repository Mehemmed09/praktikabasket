import React, { useContext } from 'react'
import "./cards.scss"
import { BasketContext } from '../../Context/context'
const Cards = ({id,image,text,title,product,price}) => {
  const{AddBasket}=useContext(BasketContext)
  return (
<>
<div className="card" width="18rem">
    <img className='card-image-top' src={image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <p className="card-text">{price}</p>
<button className='btn btn-danger' onClick={()=>AddBasket(product)}>Add To Basket</button>
  </div>
</div>
</>
  )
}

export default Cards