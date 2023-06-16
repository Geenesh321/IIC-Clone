import React from "react";
import "./nav.css"

const nav = () => {
    // js

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={require('../Assets/IICLogo.png')} alt="IIC Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">OUR PARTNERS</a></li>
                    <li><a href="#">PROGRAMMES</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Enquire Now</a></li>
                    <li><a href="#">Contact US</a></li>
                </ul>
            </nav>
        </>
    )
}

export default nav

