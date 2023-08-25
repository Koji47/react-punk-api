import "./Nav.scss";
import { ChangeEvent } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { Link } from "react-router-dom";
import FiltersList from "../../Components/FilterList/FilterList";

type NavProps = {
  onSearch: (searchInput: string) => void;
  onChange: (filterType: string) => void;
  searchInput: string;
  abvChecked: boolean;
  classicChecked: boolean;
  acidChecked: boolean;
};

const Nav = ({
  onSearch,
  onChange,
  searchInput,
  abvChecked,
  classicChecked,
  acidChecked,
}: NavProps) => {
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
        <FiltersList
          onChange={onChange}
          abvChecked={abvChecked}
          classicChecked={classicChecked}
          acidChecked={acidChecked}
        />
      </nav>
    </>
  );
};

export default Nav;
