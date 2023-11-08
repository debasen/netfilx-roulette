import Dropdown from '../dropdown/dropdown';
import './sortControl.scss';

const SortControl = ({ currentSelection, handleSelectChange }) => {
    const options = ["Release Date", "Title"];
    const someClassName="select-sort-by";
    return (
        <div className="sort-by">
            <label htmlFor="sort-select">SORT BY</label>
            <Dropdown options={options} selectedOption={currentSelection} onChange={(e) => handleSelectChange(e.target.value)} someclass={someClassName}/>
        </div>
    );
}
export default SortControl;