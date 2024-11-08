import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Nav from "../../layout/nav/Nav";
import Footer from "../../layout/footer/Footer";
import DocNav from "./doc_nav/DocNav";

const DocLayout = (props: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Nav />
            <div class="DocMain">
                <Sidebar />

                <main>
                    {props.children}
                </main>
                
            </div>
            <Footer />
        </>
    )
}

export default DocLayout