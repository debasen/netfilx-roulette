import { useState } from "react";
import './searchForm.scss';

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
        <div className="search-container">
            <div className="search-banner">
            </div>
            <form className="form" onSubmit={handleSubmitSearch}>
                <input className="search-box" aria-label="search-box" value={searchedInput} placeholder="What do you want to watch" onChange={handleSearch} />
                <button className="btn-submit" onClick={handleSubmitSearch}>SEARCH</button>
            </form>
        </div>

    )
}
export default SearchForm;