import React from 'react'
import MenuList from "../../data/MenuList.json";


const Navbar = () => {
    return (
        <div className="col-xl-8">
            <ul className="main-menu">
                {MenuList.map((menu, index) => {
                    const {title, href, className } = menu;
                    return (
                        <li key={index}>
                            <a href={href} className={className}>{title}</a>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Navbar;
