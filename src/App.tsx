import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Beer } from "./Data/Types";
import "./App.scss";
import Main from "./Containers/Main/Main";
import Nav from "./Containers/NavBar/Nav";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
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
    getBeer();
  });

  const beersFiltered = beers.filter((alcohol) => {
    return alcohol.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <HashRouter>
      <>
        <Nav onSearch={handleSearch} searchInput={searchInput} />
        <Main beers={beersFiltered} />
        <Routes>
          <Route></Route>
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
