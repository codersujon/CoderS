import React from 'react'
import NavbarList from "./NavbarList";
import MenuList from "../../jsonFiles/MenuList";


const Navbar = () => {
    return (
        <div className="col-xl-8">
            <ul className="main-menu">
                {MenuList.map((menu)=>{
                        return(
                            <NavbarList
                                href= {menu.href}
                                title= {menu.title}
                                className= {menu.className}
                            />
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default Navbar;
