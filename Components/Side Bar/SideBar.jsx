import React, { useState } from 'react'
import "./sideBar.css"
import SideBarHomePage from '../Side Bar Pages/SideBarHomePage';
import SideBarSettingPage from '../Side Bar Pages/SideBarSettingPage';
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import SideBarInventoryPage from '../Side Bar Pages/SideBarInventoryPage';

const SideBar = () => {

    const sideBarBtn = ["Home" , "Inventory" , "Settings" , "Privacy" , "Logout"];
    const sideBarIcon = [<FaHome />,<MdOutlineInventory2 />,<IoMdSettings />,<MdPrivacyTip />,<IoLogOutSharp />];

    const [component, setComponent] = useState(0);
    const [dealerCode, setDealerCode] = useState("xyz");

    function showComponent(component)
    {
        if (component == 0)
        {
            return <SideBarHomePage />
        }
        else if (component == 1)
        {
            return <SideBarInventoryPage />
        }
    }

  return (
    <div className='sideBarBody'>

        <div className='sideBarContainer'>
            <div>
                <div className='sideBarLogoContainer'>
                    <p className='sideBarLogo'>SOP</p>
                </div>
                <div className='sideBarBtnContainer'>
                    {
                        sideBarBtn.map((ele, key)=>{
                            return (
                                <div  onClick={()=>setComponent(key)} className={component==key ? 'sideBarSelectBtnChild' : "sideBarUnselectBtn"}>
                                    <p className='sideBarBtnChildIcon'>{sideBarIcon[key]}</p>
                                    <p className='sideBarBtnChildName'>{ele}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='sideBarDealerCodeComponent'>
                <h1>Bajaj Dealer Code</h1>
                <p>{dealerCode}</p>
            </div>
        </div>

        <div className='sideBarMainComponent'>
            <div className='sideBarShowComponent'>
                {
                    showComponent(component)
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar