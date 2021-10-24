import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        to="/clipboard">
                        Clipboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        to="/camera">
                        Camera
                    </NavLink>
                </li>
            </ul>
        </React.Fragment>
    )
}