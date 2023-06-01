import styles from './index.module.css'
import image from '../../assets/image 1.svg'
import { Link } from "react-router-dom"


export const LandingPage = () => {
    return (
        <section className={styles.Section}>
            <article className={styles.article}>
                <h1 className={styles.title}>ToDo List</h1>
            </article>
            <Link to='./to-do'><img className={styles.img_Capa} src={image} alt="Logo principal" /></Link>
        </section>
    )
}