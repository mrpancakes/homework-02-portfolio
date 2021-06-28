import emailIcon from '../images/email.png'
import githubIcon from '../images/github.png'
import linkedinIcon from '../images/linkedin-icon.png'
import resumeIcon from '../images/resume-icon.png'

const Contact = () => {
    return (
        <section className="page container-fluid d-flex flex-column align-items-center" id="contact">
        <h1 className="mb-4">Contact</h1>
        <p className="text-center mb-5">I'd love to chat with you!</p>
        <div className="d-flex flex-wrap justify-content-center">
            <a href="mailto:scott.a.strittmatter@gmail.com" target="_blank" rel="noreferrer"><img className="icon"
                    src={emailIcon} alt="Email"/></a>
            <a href="https://github.com/mrpancakes" target="_blank" rel="noreferrer"><img className="icon" src={githubIcon}
                    alt="Github"/></a>
            <a href="https://www.linkedin.com/in/scottstrittmatter/" target="_blank" rel="noreferrer"><img className="icon"
                    src={linkedinIcon} alt="LinkedIn"/></a>
            <a href="./images/resume-scott-strittmatter.pdf" target="_blank" rel="noreferrer"><img className="icon"
                    src={resumeIcon} alt="Resume"/></a>
        </div>
    </section>
    )
}

export default Contact
