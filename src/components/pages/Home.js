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
        <li className={styles.li}><LinkButton to="/Preference" text="Preferências" /></li>
        <li className={styles.li}><LinkButton to="/PedidosAnteriores" text="Pedidos anteriores" /></li>
        <li className={styles.li}><LinkButton to="/PedidosAnteriores" text="Status do pedido" /></li>
        <li className={styles.li}><LinkButton to="/Adpromocao" text="Criar promoção" /></li>
      </ul>
    </section>
  )
}

export default Home
