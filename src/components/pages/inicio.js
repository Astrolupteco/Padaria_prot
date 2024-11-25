import React from "react";
import styles from "./inicio.module.css";
import pao from '../../img/pao_de_queijo.png';
import cafe from '../../img/cafe.png';
import misto from '../../img/misto.png';
import cappucino from '../../img/capuccino.png';
import bomba from '../../img/bomba.png';
import croissant from '../../img/croissant.png';
export default function Inicio() {
    return (
        <div className={styles.container}>
            {/* Header com imagem */}
            <div className={styles.header}>
                <input
                    type="text"
                    placeholder="Pesquisar ..."
                    className={styles.searchBar}
                />
            </div>

            {/* Promoções do Dia */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Promoções do Dia</h2>
                <div className={styles.promotionsGrid}>
                    <div className={styles.card}>
                        <img
                            src={pao}
                            alt="Pão de Queijo"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Descubra o sabor incomparável do nosso pão de queijo!
                        </p>
                        <p className={styles.price}>R$ 3,99 unid</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={cafe}
                            alt="Café Expresso"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Para começar o dia com nosso café expresso quentinho!
                        </p>
                        <p className={styles.price}>R$ 2,49 unid</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={misto}
                            alt="Misto Quente"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Chegou a hora do lanche perfeito! Um misto quente.
                        </p>
                        <p className={styles.price}>R$ 5,90 unid</p>
                    </div>
                </div>
            </section>

            {/* Promoções da Semana */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Promoções da Semana</h2>
                <div className={styles.promotionsGrid}>
                    <div className={styles.card}>
                        <img
                            src={cappucino}
                            alt="Capuccino"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Desfrute do sabor sofisticado do nosso cappuccino tradicional.
                        </p>
                        <p className={styles.price}>R$ 5,50 unid</p>
                    </div>
                    <div className={styles.card}>
                        <img
                            src={bomba}
                            alt="Bomba de Chocolate"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Sinta o prazer em cada mordida com nossa bomba de chocolate.
                        </p>
                        <p className={styles.price}>R$ 4,50 unid</p>
                    </div>
                </div>
            </section>

            {/* Promoções do Mês */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Promoções do Mês</h2>
                <div className={styles.promotionsGrid}>
                    <div className={styles.card}>
                        <img
                            src={croissant}
                            alt="Croissant"
                            className={styles.cardImage}
                        />
                        <p className={styles.cardText}>
                            Croque por fora, derrete por dentro!
                        </p>
                        <p className={styles.price}>R$ 7,50 unid</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
