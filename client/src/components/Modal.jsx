import styles from "../styles/Modal.module.css";

// eslint-disable-next-line react/prop-types
export default function Modal({ children, show }) {
  return (
    <div className={show} id={styles.modal}>
      { children }
    </div>
  )
}
