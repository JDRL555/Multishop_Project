import '../styles/Modal.css'

export default function Modal({ children, show }) {
  return (
    <div className={show} id="modal">
      { children }
    </div>
  )
}
