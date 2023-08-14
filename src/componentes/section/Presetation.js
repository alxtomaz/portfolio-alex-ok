import styles from './Presentation.module.css'
import Buttona from '../elements/Buttona'
import { useEffect, useState } from 'react'

function Presentation () {

    const [text, setText] = useState('');
    const toRotate = ['Alex Tomaz', 'Desenvolvedor Front End', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);    

    // estrutura para clean up function
    useEffect(()=>{
            // essa function é para escrever letra a letra em cima do periodo do delta 0,1 segundos 
            let ticker = setInterval(()=>{
                toType()
            }, delta)
            return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        //divisão do tamanho do array, operador % pega o resto da divisão, vai ser adequado ao numero de itens dentro do array
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updateText);

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    return (
        <div className= {styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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