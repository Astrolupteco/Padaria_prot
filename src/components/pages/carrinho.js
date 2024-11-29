import React, { useState } from "react";
import styles from "./carrinho.module.css";
import LinkButton from '../layout/LinkButton'

export default function Carrinho() {
    const [showPopup, setShowPopup] = useState(false); // Controla a visibilidade do pop-up

    const handleCheckout = () => {

        setShowPopup(true); // Exibe o pop-up
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);//delay
    };

    return (
        <div className={styles.container}>
            {/* Título */}
            <h1 className={styles.title}>Finalize seu carrinho:</h1>

            {/* Lista de Itens */}
            <ul className={styles.cartList}>
                <li className={styles.cartItem}>
                    <div>
                        <p className={styles.itemName}>1x Pão na chapa</p>
                        <p className={styles.itemDetail}>+ Adicional Bacon</p>
                    </div>
                    <div className={styles.itemPrice}>R$4,50</div>
                    <button className={styles.removeButton}>🗑️</button>
                </li>
                <li className={styles.cartItem}>
                    <div>
                        <p className={styles.itemName}>1x Pudim</p>
                        <p className={styles.itemDetail}>+ Adicional Doce de Leite</p>
                    </div>
                    <div className={styles.itemPrice}>R$8,00</div>
                    <button className={styles.removeButton}>🗑️</button>
                </li>
                <li className={styles.cartItem}>
                    <div>
                        <p className={styles.itemName}>1x Café com Leite</p>
                        <p className={styles.itemDetail}>+ Adicional Chantilly</p>
                    </div>
                    <div className={styles.itemPrice}>R$6,50</div>
                    <button className={styles.removeButton}>🗑️</button>
                </li>
            </ul>

            {/* Subtotal */}
            <div className={styles.subtotal}>
                <p>Subtotal do pedido:</p>
                <p>R$27,00</p>
            </div>

            {/* Botão de Finalizar */}
            <li className={styles.li}><LinkButton to="/entrega" text="Finalizar pedido" /></li>

            {/* Pop-up de Confirmação */}
            {showPopup && (
                <div className={styles.popup}>
                    Pedido confirmado com sucesso!
                </div>
            )}
        </div>
    );
}
