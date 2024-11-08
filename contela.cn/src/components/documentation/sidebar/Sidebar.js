import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside id="DocSide">
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <div class="sb-sidenav-menu-heading">API Guide</div>
                                    <NavLink to="/documentation/api-ems-pcf" style={{ textDecoration: "none" }}>
                                        <a class="nav-link">
                                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                            PCF Policy Control APIs
                                        </a>
                                    </NavLink>
                                <div class="sb-sidenav-menu-heading">Reference</div>
                                    <NavLink to="/documentation/ref-init-pc-setup" style={{ textDecoration: "none" }}>
                                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                            Initial PC Setup Procedure
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                    </NavLink>
                                    <NavLink to="/documentation/ref-cncr" style={{ textDecoration: "none" }}>
                                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                            CN Group Coding Rule
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                    </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;