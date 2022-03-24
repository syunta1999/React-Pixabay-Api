import React, {useState} from "react";

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {        
        // submitイベントの本来の動作を止める
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input 
                type="text" 
                name="search" 
                placeholder="Search" 
                value={term} onChange={(event) => {
                    setTerm(event.target.value);
                }}
                />
            </div>
            </form>
        </div>
    );
};
export default SearchBar;