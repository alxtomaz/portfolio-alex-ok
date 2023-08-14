import Buttonb from './Buttonb'
import styles from './Card1.module.css'
import { useState } from 'react'

function Card1 ({image, title, tech, site, description, repo}) {

    const [info, setInfo] = useState(false)

    function infoOn () {
        setInfo(true)
    }

    function infoOff () {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={styles.card1}>
            <a onMouseEnter={infoOn} href={site} target='blank'>
                <img src={image} alt="ERRO"/>
            </a>

            { info === true &&
            (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia: </strong> {tech}</p>
                    <p> {description}</p>
                    <Buttonb text='Acesse o repositório' link={repo} target="blank"/>
                </section>
            )
                
            }            
            
        </div>
    )
}

export default Card1