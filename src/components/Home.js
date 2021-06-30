import React, { useState, useEffect } from 'react'

import downArrow from '../images/down-arrow.png'


const Home = () => {

    const [typewriter, setTypewriter] = useState("text-center hide")

    const [nameMargin, setNameMargin] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTypewriter("text-left typewriter five-px-padding");
            setNameMargin(true);

            setTimeout(() => {
                setTypewriter("text-center five-px-padding");
              }, 5500)

            }, 1000)
    }, []);

    return (
        <section className="home container-fluid d-flex flex-column justify-content-center" id="home">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-7 center intro d-flex flex-column align-items-center justify-content-center">
                    <h1 className={nameMargin ? " " : "margin-bottom"} >Hey, I'm Scott!</h1>
                    <div className={typewriter} id="job-title">Full-Stack Web Developer</div>
                </div>
                <div className="col-12 col-lg-2 d-flex justify-content-center align-items-center">
                    <div className="about-photo" />
                </div>
            </div>
            <a href="#about" className="row arrow bounce"><img src={downArrow}
                alt="down arrow" /></a>
        </section>
    )
}

export default Home