//Biblioteca de icons só digitar o nome do icone
import {FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Buttonb from '../elements/Buttonb'
import styles from './Footer.module.css'

function Footer () {
    return (
        <div className={styles.footer}>
            <Buttonb text='Ver repositorio Completo' link="https://github.com/"/>  
            <ul>
                <li><Nav.Link href='https://www.instagram.com/' target='blank'><FaInstagram/></Nav.Link></li>
                <li><Nav.Link href='https://github.com/' target='blank'><FaGithub/></Nav.Link></li>
                <li><Nav.Link href='https://www.linkedin.com/feed/' target='blank'><FaLinkedin/></Nav.Link></li>
            </ul>
            <p>alextomaz70@gmail.com</p>
            <p>Alex Tomaz © 2023 </p>            
        </div> 
    )
}

export default Footer