import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Olá seja  <span>Bem Vindo</span>
      </h1>
      <ul className={styles.ul}>
        <li className={styles.li}><LinkButton to="/" text="Informações do usuário" /></li>
        <li className={styles.li}><LinkButton to="/" text="Preferências" /></li>
        <li className={styles.li}><LinkButton to="/" text="Pedidos anteriores" /></li>
        <li className={styles.li}><LinkButton to="/" text="Status do pedido" /></li>
      </ul>
    </section>
  )
}

export default Home
