import React from 'react';
import styles from './cardapio.module.css';
import LinkButton from '../layout/LinkButton'
/* aqui se utilizara props para o melhor funcionamento apenas para desmontração do mvp */
const Cardapio = () => {
    return (

        <div className={styles.cardapioContainer}>

            <h1>Cardápio</h1>
            <p className={styles.btn}><LinkButton to="/newproject" text="Criar Produto" /></p>
            <ul>
                <li className={styles.cardapioContainer1}><LinkButton to="/doces" text="Doces" /></li>

                <li className={styles.cardapioContainer2}><LinkButton to="/doces" text="Salgados" /></li>
                <li className={styles.cardapioContainer3}><LinkButton to="/doces" text="Bebidas" /></li>
            </ul>
        </div>

    );
};

export default Cardapio;