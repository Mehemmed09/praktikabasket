import React, { useContext } from 'react'
import "./cards.scss"
import { BasketContext } from '../../Context/context'
const Cards = ({id,name,image,product}) => {
  const{AddBasket}=useContext(BasketContext)
  return (
<>
<div className="card" width="18rem">
    <img className='card-image-top' src={image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{id}</h5>
    <p className="card-text">{name}</p>
<button className='btn btn-danger' onClick={()=>AddBasket(product)}>Add To Basket</button>
  </div>
</div>
</>
  )
}

export default Cards