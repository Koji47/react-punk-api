import "./CardContainer.scss";
import { Beer } from "../../Data/Types";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";

type CardContainerProps = {
  beers: Beer[];
};

const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer) => (
        <Link to={`/beer/${beer.id}`} key={beer.id}>
          <Card
            name={beer.name}
            tagline={beer.tagline}
            image_url={beer.image_url}
            abv={beer.abv}
            ph={beer.ph}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
