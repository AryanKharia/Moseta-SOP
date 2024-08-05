import React from 'react'
import "./inventoryCard.css"

const InventoryCard = ({productName, quantity, image}) => {
  return (
    <div className='inventoryCardBody'>
        <div className='inventoryCardImage'>
            <img src="" alt="" />
        </div>
        <h1>{productName}</h1>
        <h2>Quantity : {quantity}</h2>
    </div>
  )
}

export default InventoryCard