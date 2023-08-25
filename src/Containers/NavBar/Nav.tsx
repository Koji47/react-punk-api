import "./Nav.scss";
import { ChangeEvent } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { Link } from "react-router-dom";

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
        <SearchBox
          label="Search"
          handleInput={handleInput}
          input={searchInput}
        />
        <Link to={"/"} className="Home">
          Home
        </Link>
      </nav>
    </>
  );
};

export default Nav;
