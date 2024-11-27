import React from "react";
import styles from "./LoginApp.module.css";
import LinkButton from '../layout/LinkButton'
export default function LoginApp() {
  return (
    <div className={styles.container}>

      {/* Título */}
      <h1 className={styles.title}>Login</h1>

      {/* Formulário */}
      <form className={styles.form}>
        {/* Campo de e-mail */}
        <label className={styles.label} htmlFor="email">
          Seu e-mail:
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder="exemplo@exemplo.com.br"
        />

        {/* Campo de senha */}
        <label className={styles.label} htmlFor="password">
          Sua senha:
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          placeholder="Password"
        />

        {/* Opções adicionais */}
        <div className={styles.optionsContainer}>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="rememberMe" className={styles.checkbox} />
            <label htmlFor="rememberMe" className={styles.rememberText}>
              Lembrar-me
            </label>
          </div>
          <div className={styles.links}>
            <a href="/" className={styles.link}>
              Cadastrar
            </a>
            <span className={styles.separator}>|</span>
            <a href="/" className={styles.link}>
              Esqueceu a senha?
            </a>
            <LinkButton to="/" text="Logar" />
          </div>
        </div>
      </form>
    </div>
  );
}
