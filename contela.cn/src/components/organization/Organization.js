import React from "react";
import { Route, Routes } from "react-router-dom";
import page_preparing from "./page_preparing.jpg";

const OrgHome = () => {
    return (
        <div id="OrgHome">
            <center><img src= {page_preparing} width="800"/></center>
        </div>
    )
}

const Organization = () => (
    <Routes>
        <Route path="/" element={<OrgHome />} />
    </Routes>
)

export default Organization;