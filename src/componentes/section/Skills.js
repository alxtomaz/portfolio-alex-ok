import styles from './Skills.module.css'

import javascript from '../../image/skills/java.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/type.svg'

function Skills () {
    return (
        <div id="Skills" className = {styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src ={javascript} alt="ERRO"/>
                <img src = {html} alt="ERRO"/>
                <img src = {css} alt="ERRO"/>
                <img src = {react} alt="ERRO"/>
                <img src = {typescript} alt="ERRO"/>
            </div>
        </div>
        
    )
}

export default Skills