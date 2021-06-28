import moment from 'moment'

const currentYear = moment().format("YYYY");

const Footer = () => {
    return (
        <footer>©&nbsp; {currentYear} Scott Strittmatter. All rights reserved.</footer>
    )
}

export default Footer
