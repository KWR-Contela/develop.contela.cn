import React from "react";
import { Route, Routes } from "react-router-dom";
import cn_organization from "./CN_Organization.png";

const OrgHome = () => {
    return (
        <div id="OrgHome">
            <center><img src= {cn_organization} width="auto" style={{ paddingTop: "50px", paddingBottom: "50px" }}/></center>
        </div>
    )
}

const Organization = () => (
    <Routes>
        <Route path="/" element={<OrgHome />} />
    </Routes>
)

export default Organization;