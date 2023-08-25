import "./SearchBox.scss";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  label: string;
  input: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ label, handleInput, input }: SearchBoxProps) => {
  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor={label}></label>
      <input
        className="search-bar__input"
        type="text"
        onChange={handleInput}
        placeholder="Search for a beer"
        value={input}
        id="search"
      />
    </div>
  );
};

export default SearchBox;
