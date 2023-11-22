import React from 'react'
import { NavComponent } from '../components/NavComponent'
import "./generalPageStyles.css"

export const LoginPage = () => {
    return (
        <>
            <NavComponent />
            <h2>Login page</h2>
            <div className='containerLogin'>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Enter</button>
            </div>
        </>
    )
}