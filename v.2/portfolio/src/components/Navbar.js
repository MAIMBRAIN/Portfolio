import React from "react";

const Navbar = (props) =>
{
    return(
        <nav className="navbar navbar-expand-sm sticky-top bg-dark">
            <ul className="nav nav-tabs mx-auto">
                <li className="nav-item mx-5">
                    <a className="nav-link" href='#about'>
                        About
                    </a>
                </li>
                <li className="nav-item mx-5">
                    <a className="nav-link" href='#projects'>
                        Projects
                    </a>
                </li>
                <li className="nav-item mx-5">
                    <a className="nav-link" href='#contact'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;