import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightestblue"
                type="search"
                placeholder="Search Robots"
                onChange={props.searchChange}
            />
        </div>
    );
};

export default SearchBox;