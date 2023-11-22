import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}