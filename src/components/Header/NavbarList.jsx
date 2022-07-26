import React  from "react";



const NavbarList = (props) =>{
    // Destructuring
    const {href, title, className} = props;
    return(
        <li><a href={href} className={className}>{title}</a></li>
    );
}


export default NavbarList; 