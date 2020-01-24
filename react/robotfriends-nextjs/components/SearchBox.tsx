import React from 'react';

interface SearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = (props: SearchBoxProps): JSX.Element => {
  const { searchChange } = props;

  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightestblue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
