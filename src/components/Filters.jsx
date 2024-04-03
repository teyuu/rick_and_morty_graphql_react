import React, {useRef} from "react";
import { GET_FILTERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Filters = ({ setFilterSelected }) => {
  const { loading, error, data } = useQuery(GET_FILTERS);
  const characters = data?.characters?.results || [];

  //Se obtienen los distintos tipos de filtros que se pueden seleccionar
  const statuses = [...new Set(characters.map((e) => e.status))];
  const genders = [...new Set(characters.map((e) => e.gender))];
  const species = [...new Set(characters.map((e) => e.species))];

// Refs for accessing select elements
  const statusSelect = useRef(null);
  const genderSelect = useRef(null);
  const speciesSelect = useRef(null);

  const handleOnChange = (e) => {
    setFilterSelected((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetFilters = () => {
    setFilterSelected({
      status: "",
      gender: "",
      species: "",
    });

     // Set select elements to the first option
    statusSelect.current.value = "";
    genderSelect.current.value = "";
    speciesSelect.current.value = "";

  };

  const selectStyles = "w-full basis-1/2 rounded-lg p-1"; 



  return (
    <div 
    className=" text-black flex flex-col h-fit sm:flex-row gap-5">
      <select className={selectStyles} ref={statusSelect} name="status" onChange={handleOnChange}>
        <option value="" disabled selected >Status...</option>
        {statuses.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select className={selectStyles} ref={genderSelect}  name="gender" onChange={handleOnChange}>
        <option value="" disabled selected>Gender...</option>
        {genders.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select className={selectStyles} ref={speciesSelect} name="species" onChange={handleOnChange}>
        <option value="" disabled selected>Species...</option>
        {species.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        className=" basis-1/5 bg-white rounded-lg  p-1"
        onClick={handleResetFilters}
      >
        Reset filters
      </button>
    </div>
  );
};

export default Filters;
