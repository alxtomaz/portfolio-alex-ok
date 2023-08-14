import Card1 from '../elements/Card1'
import styles from './Projects.module.css'
import portalex from '../../image/projects/portalex.png'
import googlealex from '../../image/projects/googlealex.png'
import cobrancaalex from '../../image/projects/cobrancaalex.png'


function Projects () {
    return (
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <section>
                <Card1 
                title='Projeto portfolio' 
                tech='HTML, CSS, JS, REACT' 
                description='Este projeto tem como objetivo mostrar os projetos que ja realizei.' 
                image={portalex}
                site='https://portfolio-alex-ok.vercel.app/'
                repo='https://github.com/alxtomaz/portfolio-alex-ok.git'        
                />
            </section>
            <section>
            <Card1 
                title='Projeto Google' 
                tech='HTML, CSS, JS, REACT' 
                description='Projeto similar a pagina do Google' 
                image={googlealex}
                site='https://google-react-puce.vercel.app/'
                repo='https://github.com/alxtomaz/google-react.git'        
                />
            </section>
            <section>
            <Card1 
                title='Projeto Registro Cobrança' 
                tech='HTML, CSS, JS' 
                description='Projeto para registrar atendimentos de cobrança de clientes de um provedor' 
                image={cobrancaalex}
                site='https://cobranca-netvale.vercel.app/'
                repo='https://github.com/alxtomaz/cobranca_netvale.git'        
                />
            </section>                 
        </div>
    )
}

export default Projects