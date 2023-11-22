import React from 'react'
import { NavComponent } from '../components/NavComponent'

export const HomePage = () => {
    return (
        <>
        <NavComponent />
            <div>
                <h2>Home Page</h2>
                <button>Looking for...</button>
            </div>
        </>
    )
}