import "./Nav.scss";
import { ChangeEvent } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { Link } from "react-router-dom";

type NavProps = {
  onSearch: (searchInput: string) => void;
  searchInput: string;
};

const Nav = ({ onSearch, searchInput }: NavProps) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    onSearch(input);
  };

  return (
    <>
      <nav>
        <Link to={"/"} className="Home">
          Home
        </Link>
        <h1>Brewdog</h1>
        <SearchBox
          label="Search"
          handleInput={handleInput}
          input={searchInput}
        />
      </nav>
    </>
  );
};

export default Nav;
