import { useState } from "react";
import './searchForm.css';

const SearchForm = (props) => {
    let [searchedInput, setSearchedInput] = useState(props.initialSearchTerm);
    const handleSearch = (e) => {
        setSearchedInput(e.target.value);
    };
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        props.onChange(searchedInput);
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmitSearch}>
                <input className="search-box" aria-label="search-box" value={searchedInput} placeholder="Search Movies" onChange={handleSearch} />
                <button className="btn-submit" onClick={handleSubmitSearch}>Search</button>
            </form>
        </div>
    )
}
export default SearchForm;