import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const closeModal = (e) => {
    // Evita que el evento se propague al div de fondo oscuro
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div  className="border rounded w-[350px] text-center bg-black p-4  z-50">
        {children}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
