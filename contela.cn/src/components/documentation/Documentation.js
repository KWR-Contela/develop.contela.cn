import React from "react";
import { NavLink } from "react-router-dom";
import DocNav from "./doc_layout/doc_nav/DocNav";

function Documentation() {
    return (
        <>
        <DocNav />
            <section id="features" style={{ paddingTop: "0rem" }}>
                <div class="container px-100">
                    <div class="row gx-5 align-items-center">
                        <div style={{ textAlign: "left", paddingBottom: "1rem", color: "gray" }}>
                            <h3 class="font-alt">API Guide</h3>
                        </div>
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="mb-5">
                                    <div class="text-center">
                                        <div style={{ paddingLeft: "20rem", paddingRight: "20rem" }}>
                                            <NavLink to="/documentation/api-ems-pcf" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-gear icon-feature text-gradient d-block mb-3"></i>
                                                <h4 class="font-alt NavHover">PCF Policy Control APIs</h4>
                                            </NavLink>
                                        </div>
                                        <p class="text-muted mb-0">Read about the PCF Policy Control APIs that you can use to control specific policy in PCF.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div class="row gx-5 align-items-center">
                        <div style={{ textAlign: "left", paddingBottom: "1rem", color: "gray" }}>
                            <h3 class="font-alt">Reference</h3>
                        </div>
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="col-md-6 mb-5">
                                    <div class="text-center">
                                        <div style={{ paddingLeft: "6.5rem", paddingRight: "6.5rem" }}>
                                            <NavLink to="/documentation/ref-init-pc-setup" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-book icon-feature text-gradient d-block mb-3"></i>
                                                <h4 class="font-alt NavHover">Initial PC Setup Procedure</h4>
                                            </NavLink>
                                        </div>
                                        <p class="text-muted mb-0">Read about the Initial PC Setup Procedure that you can use to get how to setup PC when you join Contela for the first time or when you get a new PC.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    <div class="text-center">
                                        <div style={{ paddingLeft: "7rem", paddingRight: "7rem" }}>
                                            <NavLink to="/documentation/ref-cncr" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-bookmark-star icon-feature text-gradient d-block mb-3"></i>
                                                <h4 class="font-alt NavHover">CN Group Coding Guide</h4>
                                            </NavLink>
                                        </div>
                                        <p class="text-muted mb-0">Read about the CN Group Coding Guide that you can use to learn about the essential coding rule in Contela CN Group.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    <div class="text-center">
                                        <div style={{ paddingLeft: "6rem", paddingRight: "6rem" }}>
                                            <NavLink to="/documentation/ref-vcs-git" style={{ textDecoration: "none", color: "black" }}>
                                                <i class="bi-git icon-feature text-gradient d-block mb-3"></i>
                                                <h4 class="font-alt NavHover">Version Control System(GIT)</h4>
                                            </NavLink>
                                        </div>
                                        <p class="text-muted mb-0">Introduction and description of the version control system used by CN Group.</p>
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