import Modal from "./components/Modal/Modal";
import './App.css'
import {useState} from "react";

const App = () => {
  const [showModal,setShowModal] = useState(false);

  return (
    <>
        <button className="btn btn-primary w-25" onClick={() => setShowModal(true)}>Click</button>

        <Modal title={'Some kinda modal title'} show={showModal} onClose={() => setShowModal(false)}>
            This is modal content
        </Modal>
    </>
  )
};

export default App
