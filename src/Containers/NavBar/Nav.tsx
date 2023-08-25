import "./Nav.scss";
import { ChangeEvent, useState, useEffect } from "react";
import { Beer } from "../../Data/Types";
import SearchBox from "../../Components/SearchBox/SearchBox";
import FilterItem from "../../Components/FilterItem/FilterItem";
import Main from "../Main/Main";

type NavProps = {
  onSearch: (searchInput: string) => void;
  //   onFilter: (filter: string, value: boolean) => void;
  searchInput: string;
  toggleAbv: () => void;
  toggleClassic: () => void;
  toggleAcid: () => void;
  abv: boolean;
  classic: boolean;
  acid: boolean;

  //   handleFilter: (filterInput: string) => void;
};

const Nav = ({
  onSearch,
  searchInput,
  toggleAbv,
  toggleClassic,
  toggleAcid,
  abv,
  classic,
  acid,
}: NavProps) => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beersFiltered, setBeersFiltered] = useState<Beer[]>([]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    onSearch(input);
  };

  useEffect(() => {
    let filteredBeerList = beersFiltered;

    if (searchInput) {
      filteredBeerList = filteredBeerList.filter((beer) =>
        beer.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (abv) {
      filteredBeerList = filteredBeerList.filter((beer) => beer.abv > 6);
    }
    if (classic) {
      filteredBeerList = filteredBeerList.filter(
        (beer) => parseInt(beer.first_brewed.slice(3)) < 2010
      );
    }
    if (acid) {
      filteredBeerList = filteredBeerList.filter((beer) => beer.ph < 4);
    }

    setBeersFiltered(filteredBeerList);
  }, [abv, classic, acid, searchInput]);

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
        <div className="checkboxs">
          <input
            className="checkboxs__abv"
            type="checkbox"
            value="abv"
            id="abv"
            onChange={toggleAbv}
            checked={abv}
          />
          <input
            className="checkboxs__classic"
            type="checkbox"
            value="classic"
            id="classic"
            onChange={toggleClassic}
            checked={classic}
          />
          <input
            className="checkboxs__acid"
            type="checkbox"
            value="acid"
            id="acid"
            onChange={toggleAcid}
            checked={acid}
          />

          {/* <FilterItem
            label="High Alcohol"
            onChange={(filter) => onFilter("highAlcohol", filter)}
          />
          <FilterItem
            label="Classic Range"
            onChange={(filter) => onFilter("classicRange", filter)}
          />
          <FilterItem
            label="High Acidity"
            onChange={(filter) => onFilter("highAcidity", filter)}
          /> */}
        </div>
        <div></div>
      </nav>
      <Main
        beers={beersFiltered}
        searchInput={searchInput}
        abv={abv}
        classic={classic}
        acid={acid}
      />
    </>
  );
};

export default Nav;
