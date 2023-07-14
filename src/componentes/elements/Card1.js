import Buttonb from './Buttonb'
import styles from './Card1.module.css'

function Card1 ({image, title, tech, site, description, repo}) {
    return (
        <div className={styles.card1}>
            <a href={site} target='blank'>
                <img src={image} alt="ERRO"/>
            </a>            
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong> {tech}</p>
                <p> {description}</p>
                <Buttonb text='Acesse o repositório' link={repo} target="blank"/>
            </section>
        </div>
    )
}

export default Card1