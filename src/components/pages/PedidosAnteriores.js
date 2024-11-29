import React, { useState } from "react";
import styles from './PedidosAnteriores.module.css';
import logo from '../../img/pedido-online.png';

const pedidos = [
  {
    id: 1,
    confirmadoEm: "19/10/24 - 15:10:26",
    saiuParaEntrega: "19/10/24 - 15:18:33",
    pagamento: "on-line",
  },
  {
    id: 2,
    confirmadoEm: "19/10/24 - 15:15:26",
    saiuParaEntrega: "19/10/24 - 15:35:33",
    pagamento: "on-line",
  },
  {
    id: 3,
    confirmadoEm: "19/10/24 - 15:19:26",
    saiuParaEntrega: "19/10/24 - 15:28:33",
    pagamento: "on-line",
  },
];

const PedidosAnteriores = () => {
  const [botaoVisivel, setBotaoVisivel] = useState(
    pedidos.reduce((acc, pedido) => {
      acc[pedido.id] = true; // Define cada botão como visível inicialmente
      return acc;
    }, {})
  );

  const [showPopup, setShowPopup] = useState(false); // Controla a visibilidade do pop-up

  const handleCheckout = (id) => {
    setBotaoVisivel((prev) => ({ ...prev, [id]: false })); // Remove o botão para o pedido correspondente
    setShowPopup(true); // Exibe o pop-up
    setTimeout(() => {
      setShowPopup(false); // Esconde o pop-up após 3 segundos
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2>Pedidos anteriores</h2>
      </div>
      {pedidos.map((pedido) => (
        <div key={pedido.id} className={styles.pedido}>
          <h3>Pedido #{pedido.id}</h3>
          <p>Confirmado em {pedido.confirmadoEm}</p>
          <p>Saiu para entrega em {pedido.saiuParaEntrega}</p>
          <p>Pagamento {pedido.pagamento}</p>

          {/* Renderiza o botão somente se ele estiver visível */}
          {botaoVisivel[pedido.id] && (
            <button className={styles.btn} onClick={() => handleCheckout(pedido.id)}>
              Confirmar Recebimento do Pedido
            </button>
          )}

          {showPopup && (
            <div className={styles.popup}>
              Pedido confirmado com sucesso!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PedidosAnteriores;
