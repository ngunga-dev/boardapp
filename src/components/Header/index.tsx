import styles from "./style.module.scss"

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo do Meu Board" />
                <a href="">Home</a>
                <a href="">Meu board</a>

                <button>Entrar com github</button>
            </div>
        </header>
    )
}