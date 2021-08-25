import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className="search"
            type="search"
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default SearchBox;
