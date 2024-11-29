import React, { useState } from "react";
import styles from "./comprar.module.css";
import logo from "../../img/prato.png";
import { Link } from 'react-router-dom'
const Comprar = () => {
    const [showPopup, setShowPopup] = useState(false); // Controla a visibilidade do pop-up

    const handleCheckout = () => {

        setShowPopup(true); // Exibe o pop-up
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);//delay
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <img
                    src={logo}
                    alt="Imagem do ...."
                    className={styles.productImage}
                />
                <h1 className={styles.productTitle}>IMAGEM DO PRODUTO</h1>
                <p className={styles.productPrice}>R$ VALOR $</p>

                <div className={styles.addOns}>
                    <label>
                        <input type="checkbox" />
                        Adicional 1 R$ 2,50
                    </label>
                    <label>
                        <input type="checkbox" />
                        Adicional 2 R$ 4,50
                    </label>
                    <label>
                        <input type="checkbox" />
                        Adicional 3 R$ 5,50
                    </label>
                    <label>
                        <input type="checkbox" />
                        Adicional 4 R$ 6,50
                    </label>
                </div>
                <button
                    className={styles.addToCart}
                    onClick={handleCheckout}
                >

                    Adicionar<span className={styles.cartIcon}>🛒</span>
                </button>
                {showPopup && (
                    <div className={styles.popup}>
                        Produto adicionado ao carrinho
                    </div>
                )}
            </main>
        </div >
    );
};

export default Comprar;
