import Card1 from '../elements/Card1'
import styles from './Projects.module.css'
import projeto from '../../image/projects/projects.svg'
import projeto2 from '../../image/projects/projects2.svg'


function Projects () {
    return (
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <Card1 
            title='Projeto XPTO' 
            tech='HTML, CSS, JS' 
            description='teste teste teste teste teste teste teste teste teste' 
            image={projeto}
            site='https://web.netvaletelecom.com/'
            repo='https://github.com/'        
            />
            <Card1 
            title='Projeto XPTO' 
            tech='HTML, CSS, JS' 
            description='teste teste teste teste teste teste teste teste teste' 
            image={projeto2}
            site='https://web.netvaletelecom.com/'
            repo='https://github.com/'        
            />      
        </div>
    )
}

export default Projects