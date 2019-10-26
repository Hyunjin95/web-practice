import React from 'react';

interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
};

const SearchBox = (props: ISearchBoxProps) => {
    return (
        <div className="pa2">
            <input 
                aria-label='Search Robots'
                className="pa3 ba b--green bg-lightestblue"
                type="search"
                placeholder="Search Robots"
                onChange={props.searchChange}
            />
        </div>
    );
};

export default SearchBox;