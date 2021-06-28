import React from 'react'

const Nav = () => {
    return (
            <nav className="p-2 navbar navbar-expand-lg navbar-dark header-bg sticky-top" id="main-nav">
                <button className="navbar-toggler custom-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end m-auto" id="navMenu">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav
