import {useState} from 'react'


const SearchBar = ({searchTerm, setSearchTerm}) => {

  const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e)=>{
      setInputValue(e.target.value)

      setTimeout(() => {
        setSearchTerm(inputValue);
      }, 300);
    }

  return (
    <div className=''>
        <input autoFocus className='bg-black w-full border py-1 rounded-lg border-white' type="text" value={inputValue} onChange={handleOnChange}/>
    </div>
  )
}

export default SearchBar