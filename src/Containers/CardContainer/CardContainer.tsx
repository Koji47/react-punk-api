import "./CardContainer.scss";
import { Beer } from "../../Data/Types";
import Card from "../../Components/Card/Card";

type CardContainerProps = {
  beers: Beer[];
};

const CardContainer = ({ beers }: CardContainerProps) => {
  return (
    <div className="card-container">
      {beers.map((beer, index) => (
        <Card
          key={index}
          name={beer.name}
          tagline={beer.tagline}
          first_brewed={beer.first_brewed}
          description={beer.description}
          image_url={beer.image_url}
          abv={beer.abv}
          ph={beer.ph}
        />
      ))}
    </div>
  );
};

export default CardContainer;
