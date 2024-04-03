import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS, GET_FILTERS } from "../graphql/queries";
import SearchBar from "./SearchBar";
import Filters from "./Filters";


const CharacterList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelected, setFilterSelected] = useState({
    status:'',
    gender:'',
    species:''
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name: searchTerm,
      page: pageNumber,
      status: filterSelected.status,
      gender:filterSelected.gender,
      species: filterSelected.species
    },
    onCompleted: ({ characters }) => {
      setTotalPages(characters?.info?.pages || 0);
    },
  });

 
  const characters = data?.characters?.results || [];


  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages) setPageNumber((prev) => prev + 1);
  };
  

  return (
    <div className="container mx-auto grid justify-center gap-5 pt-5 px-3">
      {/* SEARCH BAR */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* FILTER */}

      <Filters setFilterSelected={setFilterSelected}/>

      
      {/* List of characters */}
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <div className="pb-5 flex gap-5 justify-center items-center">
            <button
              className="bg-white text-black px-3 py-1 rounded-lg"
              onClick={handlePrevPage}
              disabled={pageNumber === 1}
            >
              Prev
            </button>
            <span>
              Page: {pageNumber} / {totalPages}{" "}
            </span>
            <button
              className="bg-white text-black px-3 py-1 rounded-lg"
              onClick={handleNextPage}
              disabled={pageNumber === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterList;
