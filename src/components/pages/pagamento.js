import React, { useState } from 'react';
import styles from './pagamento.module.css';

const Comprar = () => {
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentSelect = (payment) => {
        setSelectedPayment(payment);
    };

    const handleSubmit = () => {
        if (!selectedPayment) {
            alert('Por favor, selecione uma forma de pagamento.');
        } else {
            alert(`Forma de pagamento escolhida: "${selectedPayment}" Seu pedido foi anotado e logo sera entregue! \n Acompanha pelo seus pedidos`);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Forma de pagamento:</h1>
            <p className={styles.subtitle}>Pagamento somente no ato da entrega/retirada</p>
            <div className={styles.options}>
                <button
                    className={`${styles.option} ${selectedPayment === 'dinheiro' ? styles.selected : ''
                        }`}
                    onClick={() => handlePaymentSelect('dinheiro')}
                >
                    <span className={styles.icon}>💵</span> DINHEIRO
                </button>
                <button
                    className={`${styles.option} ${selectedPayment === 'cartao' ? styles.selected : ''
                        }`}
                    onClick={() => handlePaymentSelect('cartao')}
                >
                    <span className={styles.icon}>💳</span> CARTÃO
                </button>
            </div>
            <button className={styles.submit} onClick={handleSubmit}>
                Concluir compra
            </button>
        </div>
    );
};

export default Comprar;
