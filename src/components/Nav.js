import React from 'react'

const Nav = () => {
    return (
            <nav class="p-2 navbar navbar-expand-lg navbar-dark header-bg sticky-top" id="main-nav">
                <button class="navbar-toggler custom-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end m-auto" id="navMenu">
                    <ul class="navbar-nav d-flex align-items-center justify-content-center">
                        <li class="nav-item">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#work" class="nav-link">Work</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav
