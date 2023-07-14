import styles from './Presentation.module.css'
import Buttona from '../elements/Buttona'

function Presentation () {
    return (
        <div className= {styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Alex</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como Product Manager, eu tenho o compromisso de resolver<br/>
                problemascomplexos e trazer resultados excepcionais para os<br/>
                negócios.Meus projetos já geraram milhões de reais em receita<br/>
                anual estou sempre em busca de novos desafios para superar.<br/>
            </p>

            <Buttona link='https://github.com/' text='Conecte-se comigo!!'/>
    
            <br/>
        </div>
        
    )
}

export default Presentation