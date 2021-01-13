import React, { useState } from 'react';

import './style.css';

const Form = () => {
    // Hooks
    const [searchEntry, setSearchEntry] = useState("");
    // this.state = { searchEntry: "" }

    // Funtions
    const handleSearchInput = event => {
       setSearchEntry(event.target.value);
    }

    // Render
    return (
        <form className="search-form">
            <input 
                type="text"
                name="search"
                placeholder="Search..."
                onChange={handleSearchInput}
                value={searchEntry}
            />

            <button
                type="submit"
                className={`search-button ${ searchEntry.trim() ? 'active' : '' }`}
                disabled={!searchEntry.trim()}
            >
                Enviar
            </button>
        </form>
    )
}

export default Form;