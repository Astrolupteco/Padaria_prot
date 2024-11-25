import React from "react";
import styles from "./carrinho.module.css";

export default function Carrinho() {
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
            <button className={styles.checkoutButton}>
                FINALIZAR PEDIDO <span className={styles.arrow}>→</span>
            </button>
        </div>
    );
}
