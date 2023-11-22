import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import "./generalPageStyles.css"


export const MainApp = () => {
    return (
        <div className='containerMainApp'>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}