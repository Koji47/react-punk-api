import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Beer } from "./Data/Types";
import "./App.scss";
import Main from "./Containers/Main/Main";
import Nav from "./Containers/NavBar/Nav";
import BeerInfo from "./Containers/BeerInfo/BeerInfo";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [abv, setABV] = useState<boolean>(false);
  const [classic, setClassic] = useState<boolean>(false);
  const [acid, setAcid] = useState<boolean>(false);

  const getBeer = async () => {
    const baseUrl = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    const filters: string[] = [];

    if (abv) {
      filters.push(`abv_gt=6&`);
    }
    if (classic) {
      filters.push(`brewed_before=01-2010&`);
    }
    if (acid) {
      filters.push(`ibu_gt=45&`);
    }

    let queryString = "";
    if (filters.length > 0) {
      queryString = `?${filters.join("&")}`;
      if (queryString.endsWith("&")) {
        queryString = queryString.slice(0, -1);
      }
    }

    const url = `${baseUrl}${queryString}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSearch = (input: string) => {
    setSearchInput(input);
  };

  const handleFilterChange = (filterType: string) => {
    if (filterType === "abv") {
      setABV(!abv);
    }
    if (filterType === "classic") {
      setClassic(!classic);
    }
    if (filterType === "acid") {
      setAcid(!acid);
    }
  };

  useEffect(() => {
    getBeer();
  }, [searchInput, abv, classic, acid]);

  const beersFiltered = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <HashRouter>
      <>
        <Nav
          onSearch={handleSearch}
          searchInput={searchInput}
          onChange={handleFilterChange}
          abvChecked={abv}
          classicChecked={classic}
          acidChecked={acid}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main beers={beersFiltered} />
              </>
            }
          ></Route>
          <Route
            path="/beer/:beerId"
            element={
              <>
                <BeerInfo beer={beers} />
              </>
            }
          />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
