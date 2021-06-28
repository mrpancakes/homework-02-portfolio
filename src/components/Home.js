import React from 'react'
import downArrow from '../images/down-arrow.png'

const Home = () => {
    return (
        <section className="home container-fluid d-flex flex-column justify-content-center" id="home">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-7 center intro d-flex flex-column align-items-center justify-content-center">
                    <h1 className="margin-bottom" id="name">Hey, I'm Scott!</h1>
                    <div className="text-left hide typewriter" id="job-title">Full-Stack Web Developer</div>
                </div>
                <div className="col-12 col-lg-2 d-flex justify-content-center align-items-center">
                    <div className="about-photo" />
                </div>
            </div>
            <a href="#about" className="row arrow bounce" id="arrow"><img src={downArrow}
                alt="down arrow" /></a>

        </section>
            )
        }
        
        export default Home