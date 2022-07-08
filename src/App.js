import { useState } from "react";
import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Modal from "./components/Modal/Modal";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  const [isShow, setisShow] = useState(false);

  const handleClick = () => {
      setisShow(!isShow);
  }

  return (
    <>
    <header className="header">
     <h1>Component Library</h1>
    </header>
    <Paragraph background="#00ffff" color="#000000">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Paragraph>
    <Modal>
      <Button onClick={() => handleClick()} variant="primary" size="lg">Open Modal</Button>
      <div className={`modal ${isShow ? 'active' : ''}`}>
          <div className="modal__content">
              <div className="close__modal">
                  <button className="x-close" onClick={handleClick}>
                      <div style={{width: '24px', height: '24px'}}>
                          <Icon id={'delete'} strokeWidth={1} size={24} />
                      </div>
                  </button>
              </div>
              <p className="modal__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="modal__buttons">
                  <Button onClick={handleClick} variant="secondary" disabled={false} size="lg">Cancel</Button>
                  <Button onClick={handleClick} variant="danger" disabled={false} size="lg">OK</Button>
              </div>
          </div>
      </div>
    </Modal>
    </>
  );
}

export default App;
