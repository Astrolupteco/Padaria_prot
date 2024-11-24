import React from "react";
import styles from './Funcionario.module.css'; // Arquivo CSS para estilização
import logo from '../../img/pedido-online.png';
import LinkButton from '../layout/LinkButton'
const pedido = {
  id: 7,
  confirmadoEm: "19/10/24 - 15:10:26",
  saiuParaEntrega: "19/10/24 - 15:18:33",
  pagamento: "on-line",
};

const funcionario = () => {
  return (
    <div className={styles.container}>
      {/* Cabeçalho com logo */}
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} /> {/* Substitua pelo caminho da sua logo */}
      </header>

      {/* Mensagem de boas-vindas */}
      <div className={styles.welcome}>
        <h2>Olá Funcionario</h2>
        <p>Vamos ver como estão os pedidos hoje?</p>
      </div>

      {/* Pedidos Confirmados */}
      <div className={styles.orders}>
        <h3>Pedidos Confirmados</h3>
        <div className={styles.order}>
          <h4>Pedido #{pedido.id}</h4>
          <p>Confirmado em: {pedido.confirmadoEm}</p>
          <p>Saiu para entrega em: {pedido.saiuParaEntrega}</p>
          <p>Pagamento: {pedido.pagamento}</p>
          <button className={styles.details}>Ver Detalhes</button>
        </div>
      </div>

      {/* Rodapé com botões de navegação */}
      <footer className={styles.footer_button}>
      <ul className={styles.button_list}>
  <li className={styles.button_item}>
    <button className={styles.footer_button}>🕒 0 Pedidos em andamento</button>
  </li>
  <li className={styles.button_item}>
    <button className={styles.footer_button}>📦 Estoque</button>
  </li>
  <li className={styles.button_item}>
    <button className={styles.footer_button}>🎁 Promoções</button>
  </li>
</ul>
      </footer>
    </div>
  );
};

export default funcionario;
