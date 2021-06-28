import React from 'react'
import AboutModal from './AboutModal'

const About = () => {
    return (
        <section className="page container-fluid d-flex flex-column align-items-center" id="about">
        <h1 className="mb-4">About</h1>
        <p className="mb-5">I'm from Dallas, TX and have a Marketing degree from the University of Oklahoma. After college, I
            worked
            in digital marketing for eight years where I became a Marketo Certified Expert. During this period, I
            began
            dabbling in web development and implemented my learnings in my various roles. My curiosity
            and eagerness to expand my web development skill set grew over the years, which led me to taking a
            full-stack web development bootcamp offered by SMU. It was an incredible experience which helped me
            hone
            in on the languages and areas I found most intriguing. <br /><br />
            In my spare time I enjoy leathercrafting, skateboarding, and playing roller hockey. </p>

        {/* Vertically centered modal */}
        <button type="button" className="btn" id="tech-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tech I Enjoy
        </button>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Tech I Enjoy</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <AboutModal />
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
