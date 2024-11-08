import React from "react";
import { BiHomeAlt2, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const DocNav = () => (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="DocNav">
        <div class="container px-100">
            <a class="navbar-brand">
                <NavLink to="/">
                    <BiHomeAlt2 />
                </NavLink>
                <a><BiChevronRight /></a>
                <NavLink to="/documentation" style={{ textDecoration: "none", color: "black"}}>
                    <a>Documentation</a>
                </NavLink>
            </a>
        </div>
    </nav>
)

export default DocNav;