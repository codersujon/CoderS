import React from 'react'
import { FaSmile } from "react-icons/fa";

const HireMe = () => {
    const title =  "hire me"; //Declarative Programming state
    return (
        <div className="col-xl-2">
            <div className="header-btn">
                <a href="#hireMe" className="coder-btn theme-btn"> <FaSmile/> {title} </a>
            </div>
        </div>
    )
}

export default HireMe;
