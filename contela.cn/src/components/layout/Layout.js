import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Nav />

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    )
}

export default Layout