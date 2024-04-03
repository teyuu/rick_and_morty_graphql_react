import { CiSearch } from "react-icons/ci";



const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleOnChange = (e) => {
    setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 300);
  };

  return (
    <div className="flex items-center border rounded ">
      <input
        placeholder="Seach characters"
        autoFocus
        className="bg-black w-full  py-1 rounded-lg border-white"
        type="text"
        onChange={handleOnChange}
      />
      
      <CiSearch className="bg-white text-black rounded-sm h-full w-[25px]"/>
    
    </div>
  );
};

export default SearchBar;
