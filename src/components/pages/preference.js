import React from "react";
import styles from "./preference.module.css";
import pao from '../../img/pao_de_queijo.png';
import cafe from '../../img/cafe.png';
import misto from '../../img/misto.png';
import cappucino from '../../img/capuccino.png';
import bomba from '../../img/bomba.png';
import croissant from '../../img/croissant.png';
export default function Inicio() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Suas Preferências</h2>

                <div className={styles.promotionsGrid}>
                    <div className={styles.card}>
                        <img
                            src={pao}
                            alt="Pão de Queijo"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Pão de queijo
                        </p>
                        <p className={styles.price}>Adicionais:</p>
                        <p className={styles.price}>Parmesão</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={cafe}
                            alt="Café Expresso"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Expresso
                        </p>
                        <p className={styles.price}>Adicionais:</p>
                        <p className={styles.price}>Chocolate</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={misto}
                            alt="Misto Quente"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Misto quente.
                        </p>
                        <p className={styles.price}>Adicionais:</p>
                        <p className={styles.price}>Pão duplo</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={bomba}
                            alt="croissant"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Croissant
                        </p>
                        <p className={styles.price}>Adicionais:</p>
                        <p className={styles.price}>Chocolate</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
