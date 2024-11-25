import React from 'react';
import styles from './doces.module.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Doces = () => {
    const [doces, setDoces] = useState([]);
    const [bolos, setBolos] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    useEffect(() => {
        // Para ver o loading
        setTimeout(
            () =>
                fetch('http://localhost:4000/doces',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })

                    .then((resp) => resp.json())
                    .then((data) => {
                        setDoces(data)
                        setRemoveLoading(true)
                    }),
            fetch('http://localhost:4000/bolos',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                .then((resp) => resp.json())
                .then((data) => {
                    setBolos(data)
                    setRemoveLoading(true)
                }),
            100,
            fetch('http://localhost:4000/bebidas',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                .then((resp) => resp.json())
                .then((data) => {
                    setBebidas(data)
                    setRemoveLoading(true)
                }),
            100,
        )
    }, [])

    return (
        <div className={styles.docesContainer}>

            <h2>Doces classicos</h2>
            <ul>
                {doces.length > 0 &&
                    doces.map(doces => (
                        <li key={doces.name} className={styles.doceItem}>
                            {doces.name} - R$ {doces.price}
                            <Link className={styles.btn} to="/comprar">
                                Comprar
                            </Link>
                        </li>
                    ))}
            </ul>
            <h2>Bolos</h2>
            <ul>
                {bolos.length > 0 &&
                    bolos.map(bolos => (
                        <li key={bolos.name} className={styles.doceItem}>
                            {bolos.name} - R$ {bolos.price}
                            <Link className={styles.btn} to="/comprar">
                                Comprar
                            </Link>
                        </li>

                    ))}
            </ul>

            <h2>Bebidas</h2>
            <ul>
                {bebidas.length > 0 &&
                    bebidas.map(bebidas => (
                        <li key={bebidas.name} className={styles.doceItem}>
                            {bebidas.name} - R$ {bebidas.price}
                            <Link className={styles.btn} to="/comprar">
                                Comprar
                            </Link>
                        </li>
                    ))}
            </ul>


        </div>
    );
};
export default Doces;