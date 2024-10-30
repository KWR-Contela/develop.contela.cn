import React from "react";
import { Link } from "react-router-dom";
import Organization from "./Organization"

const Nav = () => (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div class="container px-5">
            <Link to="/" style={{ textDecoration: "none" }}>
                <a class="navbar-brand fw-bold">Contela.com Developer(CN) Portal</a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li class="nav-item">
                        <Link to="/organization" style={{ textDecoration: "none" }}>
                            <a class="nav-link me-lg-3" href="#features">Organization</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/documentation" style={{ textDecoration: "none" }}>
                            <a class="nav-link me-lg-3" href="#features">Documentation</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav;