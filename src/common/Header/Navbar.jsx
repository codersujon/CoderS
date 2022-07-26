import React from 'react'
import MenuList from "../../data/MenuList.json";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="col-xl-8">
            <ul className="main-menu">
                {MenuList.map((menu, index) => {
                    const { title, href, className } = menu;
                    return (
                        <li key={index}>
                            <NavLink to={href} className={className}>{title}</NavLink>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Navbar;