import Modal from "./components/Modal/Modal";
import './App.css'
import {useState} from "react";
import Alert from "./components/Alert/Alert";

const App = () => {
    const [showModal,setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

  return (
      <>
          <div className="container mt-5">
              <button className="btn btn-primary w-25 mb-2" onClick={() => setShowModal(true)}>Click</button>

              <Modal title={'Some kinda modal title'} show={showModal} onClose={() => setShowModal(false)}>
                  This is modal content
              </Modal>

              <Alert type="primary">
                  This is a primary type alert.
              </Alert>

              <Alert type="success">
                  This is a success type alert.
              </Alert>

              {showAlert ? (
                  <Alert type="danger" onDismiss={() => setShowAlert(false)}>
                      This is a danger type alert.
                  </Alert>
              ) : (<></>)}

              {showAlert ? (
                  <Alert type="warning" onDismiss={() => setShowAlert(false)}>
                      This is a warning type alert.
                  </Alert>
              ) : (<></>)}
          </div>
      </>
  )
};

export default App
