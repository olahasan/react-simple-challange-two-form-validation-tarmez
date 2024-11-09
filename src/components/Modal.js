import React from "react";

import "./Modal.css";
function Modal({ isLastScreenVisible, setisLastScreenVisible }) {
  function handleClicked() {
    if (isLastScreenVisible) {
      setisLastScreenVisible(false);
    }
  }
  return (
    <div
      className={isLastScreenVisible ? "modal" : "modal None"}
      onClick={handleClicked}
    >
      <button>X</button>
    </div>
  );
}

export default Modal;
