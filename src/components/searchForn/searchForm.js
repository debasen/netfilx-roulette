import { useState } from "react";
import './searchForm.css';

const SearchForm=()=>{
let [searchedInput,setSearchedInput]=useState("");
const handleOnChange = (e) => {
    setSearchedInput(e.target.value);
};
const onSearch=(e)=>{
    e.preventDefault();
    console.log(searchedInput)
    setSearchedInput("");
}
return (
    <div>
        <form className="form" onSubmit={onSearch}>
        <input className="search-box" value={searchedInput} placeholder="Search Movies" onChange={handleOnChange}/>
        <button className="btn-submit" onClick={onSearch}>Search</button>
        </form>
    </div>
)
}
export default SearchForm;