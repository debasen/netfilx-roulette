import Dropdown from '../dropdown/dropdown';
import './sortControl.css';

const SortControl = ({ currentSelection, handleSelectChange }) => {
    const options = ["Release Date", "Title"];
    return (
        <div className="sort-by">
            <label htmlFor="sort-select">Sort by:</label>
            <Dropdown options={options} selectedOption={currentSelection} onChange={(e) => handleSelectChange(e.target.value)} />
        </div>
    );
}
export default SortControl;