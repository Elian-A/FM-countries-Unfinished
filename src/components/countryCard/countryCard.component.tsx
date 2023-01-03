import { FC } from "react";
import { country } from "../countries.query";

const CountryCard: FC<{ country: country }> = ({ country }) => {
  const {
    name: { common, official },
    capital,
    region,
    population,
    flags: { png },
  } = country;
  return (
    <div>
      <img src={png} alt={`${name} flag`} />
      <div>
        <p>{official}</p>
        <ul>
          <li>
            <p>
              <span>population: </span>
              {population}
            </p>
            <p>
              <span>region: </span>
              {region}
            </p>
            <p>
              <span>{capital?.length === 1 ? "capital: " : "capitals: "}</span>
              {capital?.map((cap, idx) =>
                idx === capital.length - 1 ? (
                  <span key={cap}>{cap}</span>
                ) : (
                  <span key={cap}>{cap},</span>
                )
              )}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
