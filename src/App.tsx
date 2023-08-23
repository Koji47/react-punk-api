import { useState, useEffect } from "react";
import { Beer } from "./Data/Types";
import "./App.scss";
import Main from "./Containers/Main/Main";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");

    const data = await response.json();

    setBeers(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <>
      <Main beers={beers} />
    </>
  );
}

export default App;
