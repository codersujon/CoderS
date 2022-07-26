import React from 'react'
// IMAGE IMPORT
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className="col-xl-2">
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
        </div>
    )
}

export default Logo
