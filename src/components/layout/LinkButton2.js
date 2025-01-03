import styles from './LinkButton2.module.css'
import { Link } from 'react-router-dom'

function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton
