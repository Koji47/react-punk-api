import "./BeerInfo.scss";
import { useParams } from "react-router";
import { Beer } from "../../Data/Types";

type BeerInfoProps = {
  beer: Beer[];
};

const BeerInfo = ({ beer }: BeerInfoProps) => {
  const { beerId } = useParams();
  const moreInfo = beer.find((beer) => beer.id === Number(beerId));

  if (moreInfo === undefined) {
    return <p>Can't find beer</p>;
  }
  return (
    <div className="info">
      <img className="info__img" src={moreInfo.image_url} alt={moreInfo.name} />
      <div className="info__content">
        <h1 className="info__content-beer">{moreInfo.name}</h1>
        <p>
          <span className="info__content-title">Description: </span>
          {moreInfo.description}
        </p>
        <p>
          <span className="info__content-title">pH: </span>
          {moreInfo.ph}
        </p>
        <p>
          <span className="info__content-title">ABV:</span> {moreInfo.abv}
        </p>
        <p>
          <span className="info__content-title">Brewed: </span>
          {moreInfo.first_brewed}
        </p>
        <p>
          <span className="info__content--title">Try it with: </span>
          {moreInfo.food_pairing.join(", ")}
        </p>
      </div>
    </div>
  );
};
export default BeerInfo;
