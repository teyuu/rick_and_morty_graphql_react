import React, { useState } from "react";
import Modal from "./Modal";

function CharacterCard({ character }) {
  const { name, id, image, status, gender, species, type, location, origin, dimension } = character;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="flex justify-center items-end h-60 w-60 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3
        onClick={openModal}
        className="font-xl font-bold w-full  rounded bg-black bg-opacity-30  text-center "
      >
        {name}
      </h3>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className=""><span className="text-sky-200 font-bold">Status: </span>{status}</p>
        <p className=""><span className="text-sky-200 font-bold">Gender: </span>{gender}</p>
        <p className=""><span className="text-sky-200 font-bold">Species: </span>{species}</p>
        <p className=""><span className="text-sky-200 font-bold">Types:</span> {type || 'unkown'}</p>
        <p className=""><span className="text-sky-200 font-bold">Location:</span> {location?.name || 'unkown'}</p>
        <p className=""><span className="text-sky-200 font-bold">Origin:</span> {origin?.name || 'unkown' }</p>
        <p className=""><span className="text-sky-200 font-bold">Dimension:</span> {dimension?.name ||'unkown' }</p>
      </Modal>
    </div>
  );
}

export default CharacterCard;
