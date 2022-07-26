import React from 'react'

const HireMe = () => {
    const title = "hire me"; //Declarative Programming state
    return (
        <div className="col-xl-2">
            <div className="header-btn">
                <a href="#hireMe" className="coder-btn theme-btn">
                     <i className="fa-solid fa-face-smile"></i> {title}
                </a>
            </div>
        </div>
    )
}

export default HireMe;
