import React from 'react'
import "./sideBarInventoryPage.css"
import InventoryCard from './InventoryCard';

const SideBarInventoryPage = () => {
    const categories = ["ldfsjl;ajlfoi;faogflds goflkal;f asl;kfl;ak flkafa fl; adf;lkajfa dfl;kafl;kadf ad;fld;lfalkdjf;lk l;kad fl; adf;ladjf;kadfl;afl;ja","","","","","",""];
    const products = ["kjhalsdjkf i aslfjosasdfk skdfhklshfs flslf alhfklsh fklahfklashfklahfklahfosa fo;slflkfjasod flj f;las jflksfl;sajfol fl;kfl;as flka dfl; dlfj ld;fjkldsf    ",1,2,3,4,5,6,7,8,9];
    const quantity = [19,48,5,2,4,6,4,1,4,10];
    const image = ["one.png","one.png","one.png","one.png","one.png","one.png","one.png","one.png","one.png","one.png","one.png"];

  return (
    <div className='sideBarInventoryPageBody'>
        <div className='sideBarInventoryCategoryContainer'>
            <div className='sideBarInventoryCategorySlider'>
                {
                    categories.map((ele, key) => {
                        return (
                            <div className='categoryCards'>
                                <div className='cateogryImage'>
                                    <img src="one.png" alt="" />
                                </div>
                                <h1>{ele}</h1>
                            </div>
                        )
                    })
                }
            </div>

            <div className='sideBarInventoryCardContainer'>
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

        </div>
    </div>
  )
}

export default SideBarInventoryPage