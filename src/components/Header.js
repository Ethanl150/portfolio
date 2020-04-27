import React from "react";

function Header() {
    return (
        <nav className="nav navbar navbar-light d-flex p-3">

            <h2 className="title">Portfolio</h2>

            <ul>
                <li><a href="#about-me"><h4>About me</h4></a></li>
                <li><a href="#projects"><h4>Solo Projects</h4></a></li>
                <li><a href="#group-projects"><h4>Group Projects</h4></a></li>
            </ul>
        </nav>
    )
}

export default Header;