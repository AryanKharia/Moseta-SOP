import React from 'react'
import "./sideBarHomePage.css"
import { CiSearch } from "react-icons/ci";
import TransactionTable from '../Transaction Table/TransactionTable';

const SideBarHomePage = () => {
  return (
    <div className='sideBarHomePageBody'>
        <div className='sideBarSearch'>
            <div className='sideBarInputComponent'>
                <input type="text" placeholder='Search Your Transaction'/>
                <CiSearch className="sideBarSearchIcon" />
            </div>
        </div>

        <div className='sideBarHomePageTransactionTable'>
            <TransactionTable />
        </div>
    </div>
  )
}

export default SideBarHomePage