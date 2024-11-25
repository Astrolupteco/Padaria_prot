import React from "react";
import styles from "./company.module.css";
import logo from "../../img/boulo.png";
import logo1 from "../../img/paes.png";

const Company = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>SOBRE NÓS</h1>
      </div>
      <section className={styles.section}>
        <h2>Quem somos?</h2>
        <p>
          A Padoca do Felipe nasceu do sonho de um garoto que, desde pequeno,
          se encantava com o aroma irresistível do pão saindo do forno. <br />
          A paixão pela panificação, transmitida de geração em geração em sua
          família, o impulsionou a criar um espaço onde pudesse compartilhar
          essa arte com a comunidade. <br />
          Localizada na zona norte de São Paulo, oferece muitas comidas
          deliciosas, feitas com muito amor e carinho.
        </p>
        <img
          src={logo}
          alt="Imagem de um bolo"
          className={styles.image}
        />
      </section>
      <section className={styles.section}>
        <h2>Características:</h2>
        <p>
          Na Padoca do Felipe, cada pão é uma obra de arte, elaborado com
          ingredientes selecionados e um processo de fermentação natural que
          garante sabor e textura únicos. O ambiente acolhedor, com aroma de
          café recém-moído e pães quentinhos, convida os clientes a desfrutar
          de um momento especial. <br />
          <strong>VENHA NOS CONHECER!</strong>
        </p>
        <img
          src={logo1}
          alt="Imagem de pães e café"
          className={styles.image}
        />
      </section>
    </div>
  );
};

export default Company;
