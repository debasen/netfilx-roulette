import { useState } from "react";
import './searchForm.css';

const SearchForm=()=>{
let [searchedInput,setSearchedInput]=useState("");
const handleSearch = (e) => {
    setSearchedInput(e.target.value);
};
const handleSubmitSearch=(e)=>{
    e.preventDefault();
    console.log(searchedInput)
    setSearchedInput("");
}
return (
    <div>
        <form className="form" onSubmit={handleSubmitSearch}>
        <input className="search-box" value={searchedInput} placeholder="Search Movies" onChange={handleSearch}/>
        <button className="btn-submit" onClick={handleSubmitSearch}>Search</button>
        </form>
    </div>
)
}
export default SearchForm;