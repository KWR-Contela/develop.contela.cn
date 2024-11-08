import React from "react";
import { NavLink } from "react-router-dom";

const Section2 = () => (
    <section id="features">
        <div class="container px-100">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                    <div class="container-fluid px-5">
                        <div class="row gx-5">
                            <div class="col-md-6 mb-5">
                                <div class="text-center">
                                    <NavLink to="/organization" style={{ textDecoration: "none", color: "black" }}>
                                        <i class="bi-person icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Organization</h3>
                                    </NavLink>
                                    <p class="text-muted mb-0">Organization of Core Network Group in Contela.</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-5">
                                <div class="text-center">
                                    <NavLink to="/documentation" style={{ textDecoration: "none", color: "black" }}>
                                        <i class="bi-files icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Documentation</h3>
                                    </NavLink>
                                    <p class="text-muted mb-0">APIs, PC Setup Procedure, Coding Rule etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 order-lg-0">
                    <div class="features-device-mockup">
                        <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                    <stop class="gradient-start-color" offset="0%"></stop>
                                    <stop class="gradient-end-color" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r="50"></circle></svg
                        ><svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                            <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg
                        ><svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                        <div class="device-wrapper">
                            <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Section2;