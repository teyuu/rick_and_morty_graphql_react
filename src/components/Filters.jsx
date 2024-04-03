import React from "react";
import { GET_FILTERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const Filters = ({ setFilterSelected }) => {
  const { loading, error, data } = useQuery(GET_FILTERS);
  const characters = data?.characters?.results || [];

  //Se obtienen los distintos tipos de filtros que se pueden seleccionar
  const statuses = [...new Set(characters.map((e) => e.status))];
  const genders = [...new Set(characters.map((e) => e.gender))];
  const species = [...new Set(characters.map((e) => e.species))];

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
  };

  const selectStyles = "w-full basis-1/2 rounded-lg p-1";

  return (
    <div 
    className=" text-black flex flex-col  sm:flex-row gap-5">
      <select className={selectStyles} name="status" onChange={handleOnChange}>
        <option value="">Status...</option>
        {statuses.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select className={selectStyles} name="gender" onChange={handleOnChange}>
        <option value="">Gender...</option>
        {genders.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select className={selectStyles} name="species" onChange={handleOnChange}>
        <option value="">Species...</option>
        {species.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        className="sm:w-[80%] basis-1/5 bg-white rounded-lg  p-1"
        onClick={handleResetFilters}
      >
        Reset filters
      </button>
    </div>
  );
};

export default Filters;
