import styles from './Buttona.module.css'

function Buttona ({text, link}) {
    return (
        <div>
            <a href={link} target='blank'>
                <button className={styles.btn}>{text}</button>
            </a>            
        </div>
    )
}

export default Buttona