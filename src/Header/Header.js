import './Header.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import logo_white from '../Assets/Logos/Logo White.svg'
import menu_bars from '../Assets/Icons/Menu White.svg'

function Header() {

    const [displayForSidebar, setdisplayForSidebar] = useState("none")

    function openRightMenu() {
        setdisplayForSidebar('block')
    }

    function closeRightMenu() {
        setdisplayForSidebar('none')
    }

    return (
        <>

            <div class="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{ display: displayForSidebar, right: "0", background: "black", color: "white" }} id="rightMenu">
                <button onClick={() => closeRightMenu()} class="w3-bar-item w3-button w3-large" style={{ textAlign: "right" }}>&times;</button>
                <Link to="/" class="w3-bar-item w3-button">LOCATION & CONTACT</Link>
                <Link to="/" class="w3-bar-item w3-button">GALLERY</Link>
            </div>
            <nav class="navbar navbar-expand-md py-3" style={{ background: "black" }}>
                <div class="container-fluid navbar_data">
                    <Link to="/"><img src={logo_white} alt="#" height="50px" /></Link>
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "22px" }}>
                            <li class="nav-item home_option">
                                <Link to="/" class="nav-link active text-light">HOME</Link>
                            </li>
                            <li class="nav-item our_services_option">
                                <Link to="/" class="nav-link text-light">OUR SCREENS</Link>
                            </li>
                            <li class="nav-item schedule_option">
                                <Link to="/" class="nav-link text-light">SCHEDULE</Link>
                            </li>
                            <li class="nav-item movie_library_option">
                                <Link to="/" class="nav-link text-light">MOVIE LIBRARY</Link>
                            </li>
                            <li class="nav-item location_and_contact_option">
                                <Link to="/" class="nav-link text-light">LOCATION & CONTACT</Link>
                            </li>
                            <li class="nav-item menu_bars_option">
                                <Link to="/" class="nav-link text-light"><img src={menu_bars} alt="#" style={{ marginTop: "-5px" }} onClick={() => openRightMenu()} /></Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
            <hr style={{ margin: "0" }} />
        </>
    );
}

export default Header;
