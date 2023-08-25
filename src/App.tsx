import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Beer } from "./Data/Types";
import "./App.scss";
import Main from "./Containers/Main/Main";
import Nav from "./Containers/NavBar/Nav";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beersFiltered, setBeersFiltered] = useState<Beer[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [abv, setAbv] = useState<boolean>(false);
  const [classic, setClassic] = useState<boolean>(false);
  const [acid, setAcid] = useState<boolean>(false);
  // const [filters, setFilters] = useState<{
  //   highAlcohol: Boolean;
  //   classicRange: Boolean;
  //   highAcidity: Boolean;
  // }>({
  //   highAlcohol: false,
  //   classicRange: false,
  //   highAcidity: false,
  // });

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setBeers(data);
  };

  const handleSearch = (input: string) => {
    setSearchInput(input);
  };

  // const handleFilter = (filter: string, value: boolean) => {
  //   const abvCondition = beer.p;
  // };

  useEffect(() => {
    const searchedBeers = beers.filter((beer) =>
      beer.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    const filteredBeerList = searchedBeers.filter((beer) => {
      if (abv && beer.abv <= 6) return false;
      if (classic && parseInt(beer.first_brewed.slice(3)) < 2010) return false;
      if (acid && beer.ph < 4) return false;
      return true;
    });
    setBeersFiltered(filteredBeerList);
  }, [beers, searchInput, abv, classic, acid]);

  return (
    <HashRouter>
      <>
        <Nav
          onSearch={handleSearch}
          searchInput={searchInput}
          toggleAbv={() => setAbv(!abv)}
          toggleClassic={() => setClassic(!abv)}
          toggleAcid={() => setAcid(!abv)}
          abv={abv}
          classic={classic}
          acid={acid}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                beers={beersFiltered}
                searchInput={searchInput}
                abv={abv}
                classic={classic}
                acid={acid}
              />
            }
          ></Route>
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
