import styles from './Navbar.module.css'
//Biblioteca de icons só digitar o nome do icone
import {FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar () {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><Nav.Link href='https://www.instagram.com/' target='blank'><FaInstagram/></Nav.Link></li>
                <li><Nav.Link href='https://github.com/' target='blank'><FaGithub/></Nav.Link></li>
                <li><Nav.Link href='https://www.linkedin.com/feed/' target='blank'><FaLinkedin/></Nav.Link></li>
            </ul>
        </div>
    )
}

export default Navbar