import "./Card.scss";

type CardProps = {
  name: string;
  tagline: string;
  image_url: string;
  abv: number;
  ph: number;
};

const Card = ({ name, tagline, image_url, abv, ph }: CardProps) => {
  return (
    <div className="card">
      <h2 className="card__h2">{name}</h2>
      <p>{tagline}</p>
      <img src={image_url} alt={name} />
      <p>
        ABV: {abv}% PH: {ph}%
      </p>
    </div>
  );
};

export default Card;
