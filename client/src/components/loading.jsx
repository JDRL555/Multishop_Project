import ReactLoading from 'react-loading';
import Modal from './Modal'


export default function Loading ({ show }) {
  return (
    <Modal show={show}>
      <ReactLoading type={"spin"} color={"#5a9ac2"} height={80} width={80} />
    </Modal>
  ) 
}