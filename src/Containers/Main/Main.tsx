import "./Main.scss";
import { Beer } from "../../Data/Types";
import CardContainer from "../CardContainer/CardContainer";

type mainProps = {
  beers: Beer[];
};

const Main = ({ beers }: mainProps) => {
  return (
    <div className="main-container">
      <CardContainer beers={beers} />
    </div>
  );
};

export default Main;
