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

  const getBeer = async () => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;

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

  useEffect(() => {
    getBeer();
  }, [searchInput]);

  const beersFiltered = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <HashRouter>
      <>
        <Nav onSearch={handleSearch} searchInput={searchInput} />
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
