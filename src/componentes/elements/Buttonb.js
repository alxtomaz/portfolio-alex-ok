import styles from './Buttonb.module.css'

function Buttonb ({text, link}) {
    return (
        <div>
            <a href={link} target='blank'>
                <button className={styles.btn}>{text}</button>
            </a> 
        </div>
    )
}

export default Buttonb