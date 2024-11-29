import React, { useState } from 'react';
import styles from './entrega.module.css';
import LinkButton from '../layout/LinkButton2';
const Entrega = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        if (!selectedOption) {
            alert('Por favor, selecione uma opção de entrega.');
        } else {
            alert(`Você selecionou: ${selectedOption}`);

        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Entrega:</h1>
            <p className={styles.subtitle}>Selecione a forma de entrega:</p>
            <div className={styles.options}>
                <button
                    className={`${styles.button} ${selectedOption === 'casa' ? styles.selected : ''
                        }`}
                    onClick={() => handleOptionSelect('casa')}
                >
                    Quero entrega em minha casa!
                </button>
                <button
                    className={`${styles.button} ${selectedOption === 'retirar' ? styles.selected : ''
                        }`}
                    onClick={() => handleOptionSelect('retirar')}
                >
                    Vou retirar com vocês!
                </button>
            </div>
            <LinkButton to="/pagamento" text="Proximo" />
        </div>
    );
};

export default Entrega;
