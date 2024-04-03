import React from 'react';

// eslint-disable-next-line react/prop-types
function CharacterCard({character}) {

    const {name, id, image } = character;
 
  return (
    <div className="flex justify-center items-end h-60 w-60 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${image})` }}>
    
    <div>
        
    </div>
      <h3 className='font-xl font-bold w-full  rounded bg-black bg-opacity-30  text-center '>{name}</h3>

    </div>
  );
}

export default CharacterCard;
