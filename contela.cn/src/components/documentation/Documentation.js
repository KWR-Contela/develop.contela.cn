import React from "react";
import { NavLink } from "react-router-dom";
import DocNav from "./doc_layout/doc_nav/DocNav";

function Documentation() {
    return (
        <>
        <DocNav />
            <section id="features">
                <div class="container px-100">
                    <div class="row gx-5 align-items-center">
                            <div class="container-fluid px-5">
                                <div class="row gx-5">
                                    <div class="col-md-6 mb-5">
                                        <div class="text-center">
                                            <NavLink to="/documentation/api-ems-pcf" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-gear icon-feature text-gradient d-block mb-3"></i>
                                                <h3 class="font-alt">PCF Policy Control APIs</h3>
                                            </NavLink>
                                            <p class="text-muted mb-0">Read about the PCF Policy Control APIs that you can use to control specific policy in PCF.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row gx-5">
                                    <div class="col-md-6 mb-5">
                                        <div class="text-center">
                                            <NavLink to="/documentation/ref-init-pc-setup" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-book icon-feature text-gradient d-block mb-3"></i>
                                                <h3 class="font-alt">Initial PC Setup Procedure</h3>
                                            </NavLink>
                                            <p class="text-muted mb-0">Read about the Initial PC Setup Procedure that you can use to get how to setup PC when you join Contela for the first time or when you get a new PC.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-5">
                                        <div class="text-center">
                                            <NavLink to="/documentation/ref-cncr" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-bookmark-star icon-feature text-gradient d-block mb-3"></i>
                                                <h3 class="font-alt">CN Group Coding Rule</h3>
                                            </NavLink>
                                            <p class="text-muted mb-0">Read about the CN Group Coding Rule that you can use to learn about the essential coding rule in Contela CN Group.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Documentation;