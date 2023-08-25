import "./Main.scss";
import { Beer } from "../../Data/Types";
import CardContainer from "../CardContainer/CardContainer";

type mainProps = {
  beers: Beer[];
  searchInput: string;
  abv: boolean;
  classic: boolean;
  acid: boolean;
};

const Main = ({ beers, searchInput, abv, classic, acid }: mainProps) => {
  const filteredBeers = beers.filter((beer) => {
    const nameMatches = beer.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    if (abv && beer.abv > 6) return false;
    if (classic && parseInt(beer.first_brewed.slice(3)) >= 2010) return false;
    if (acid && beer.ph >= 4) return false;

    return nameMatches;
  });

  return (
    <div className="main-container">
      <CardContainer beers={filteredBeers} />
    </div>
  );
};

export default Main;
