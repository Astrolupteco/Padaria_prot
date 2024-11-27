import React, { useState } from "react";
import styles from "./Adpromocao.module.css";

const Adpromocao = () => {
    const [showPopup, setShowPopup] = useState(false); // Controla a visibilidade do pop-up

    const handleCheckout = () => {

        setShowPopup(true); // Exibe o pop-up
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);//delay
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Criar Promoção</h1>

            <div className={styles.formGroup}>
                <label htmlFor="categoria" className={styles.label}>Categoria:</label>
                <select id="categoria" className={styles.select}>
                    <option value="">Comida</option>
                    <option value="">Bebida</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="nomeProduto" className={styles.label}>Nome do Produto:</label>
                <select id="nomeProduto" className={styles.select}>
                    <option value="">Selecione da lista de produto cadastrados</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="precoPromocional" className={styles.label}>Preço Promocional:</label>
                <input
                    id="precoPromocional"
                    type="text"
                    className={styles.input}
                    placeholder="Digite o valor"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="periodoPromocao" className={styles.label}>Período de Promoção:</label>
                <select id="periodoPromocao" className={styles.select}>
                    <option value=""></option>
                    <option value="">1 dia</option>
                    <option value="">3 dias</option>
                    <option value="">7 dias</option>
                </select>
            </div>

            <button
                className={styles.button}
                onClick={handleCheckout}
            >

                Cadastrar Promoção
            </button>
            {showPopup && (
                <div className={styles.popup}>
                    Promoção cadastrada com sucesso!
                </div>
            )}
        </div>
    );
};

export default Adpromocao;
