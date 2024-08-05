import React from 'react'
import "./inventoryCard.css"

const InventoryCard = ({productName, quantity, image}) => {
  return (
    <div className='inventoryCardBody'>
        <h1 className='inventoryCardName'>{productName}</h1>
        <div className='inventoryCardImageContainer'>
            <img className='inventoryCardImage' src={image} alt="" />
        </div>
        <h2>Quantity : {quantity}</h2>
    </div>
  )
}

export default InventoryCard;