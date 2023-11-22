import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import "./generalPageStyles.css"


export const MainApp = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    )
}