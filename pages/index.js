import styles from './styles.module.css';




function Home(){
    return(
        <div>
        <Menu />
        <p>OLa</p>
        </div>
    )
}

function Menu(){

    return(
        <div className={styles.menu}>
            <div className={styles.logo}>
                <p>Site LOGO</p>
            </div>
            <div className={styles.menuItems}>
                <a href="#">Home</a>
                <a href="#">Produtos</a>
                <a href="#">Contato</a>
                <a href="#">Marcas</a>

            </div>
            <a href="#" className={styles.dnone}>apareci</a>

        </div>
    )
        
}

export default Home;