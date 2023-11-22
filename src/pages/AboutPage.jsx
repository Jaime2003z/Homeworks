import React from 'react'
import { NavComponent } from '../components/NavComponent'
import "./generalPageStyles.css"

export const AboutPage = () => {
    return (
        <>
            <NavComponent />
            <div className='containerAbout'>
                <h2>About page</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolorem, vitae officiis velit tenetur quae placeat eos repellendus voluptas dignissimos nam earum a sint nobis possimus repudiandae. Libero, delectus accusamus.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </>
    )
}