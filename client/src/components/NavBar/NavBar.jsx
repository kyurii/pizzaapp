import React from "react";
import { NavLink } from "react-router-dom";

import CurrencyIndicator from "../CurrencyIndicator";

import './NavBar.scss';

const NavBar = () => {
    const activeClassName = "active";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
            <ul className="navbar-nav w-100">
                <li className="nav-item">
                    <NavLink exact activeClassName={ activeClassName } className="nav-link" to="/">
                        <span>
                            Pizza App
                        </span>
                        <span aria-label="logo" role="img">
                            🍕
                        </span>
                    </NavLink>
                </li>
                <li className="nav-item ml-auto">
                    <CurrencyIndicator />
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={ activeClassName } className="nav-link " to="/cart">
                        <span>
                            Cart
                        </span>
                        <span aria-label="logo" role="img">
                            🛒
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
