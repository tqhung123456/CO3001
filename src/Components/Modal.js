import React from "react";
import "../css/modal.css"

function Modal({modalContent, setModalOpen, addItem}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        {/* <div className="title">
          <h1>Add to cart</h1>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div> */}
        <div className="body">
          <p>{modalContent.desc}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalOpen(false);
              addItem(modalContent);
            }}
            id="cancelBtn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
