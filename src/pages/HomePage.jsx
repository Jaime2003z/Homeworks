import React from 'react'
import { NavComponent } from '../components/NavComponent'
import "./generalPageStyles.css"
export const HomePage = () => {
    return (
        <>
        <NavComponent />
            <div className='containerHomePage'>
                <h2>Home Page</h2>
                <button>Looking for...</button>
            </div>
        </>
    )
}