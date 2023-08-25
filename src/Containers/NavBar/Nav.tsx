import "./Nav.scss";
import { ChangeEvent } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";

type NavProps = {
  onSearch: (searchInput: string) => void;
  //   onFilter: (filter: string, value: boolean) => void;
  searchInput: string;

  //   handleFilter: (filterInput: string) => void;
};

const Nav = ({ onSearch, searchInput }: NavProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    onSearch(input);
  };

  return (
    <>
      <nav>
        <div>
          <SearchBox
            label="Search"
            handleInput={handleInput}
            input={searchInput}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
