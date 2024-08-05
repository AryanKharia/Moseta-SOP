import React from 'react'
import "./sideBarInventoryPage.css"
import InventoryCard from './InventoryCard';

const SideBarInventoryPage = () => {
    
    const products = [0,1,2,3,4,5,6,7,8,9];
    const quantity = [19,48,5,2,4,6,4,1,4,10];
    const image = ["img1.jpg", "img2.jpg", "img2.jpg","img2.jpg","img2.jpg","img2.jpg","img2.jpg","img2.jpg","img2.jpg","img2.jpg"];

  return (
    <div className='sideBarInventoryPageBody'>
        {
            products.map((ele, key) => {
                return (
                    <div>
                        {
                            <InventoryCard productName={products[key]} quantity={quantity[key]} image={image[key]}/>
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default SideBarInventoryPage