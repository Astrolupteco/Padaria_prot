import React from "react";
import styles from "./comprar.module.css";
import logo from "../../img/prato.png";
import { Link } from 'react-router-dom'
const Comprar = () => {
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

                <Link className={styles.addToCart} to="carrinho">
                    Adicionar   <span className={styles.cartIcon}>🛒</span>
                </Link>
            </main>
        </div >
    );
};

export default Comprar;
