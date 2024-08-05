import React from 'react'
import "./App.css"
import HomePage from '../Components/Home Page/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Components/Login Page/LoginPage'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>           
            <Route path='/login' element={<LoginPage />}/>           
        </Routes>
    </div>
  )
}

export default App