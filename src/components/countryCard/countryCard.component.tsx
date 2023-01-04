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
    <div className="max-w-[20rem] rounded-lg bg-white cursor-pointer">
      <div className="h-[10rem] shadow-sm">
        <img
          src={png}
          alt={`${official} flag`}
          className="rounded-t-lg bg-contain w-full h-full"
        />
      </div>
      <div className="px-5 pt-4 pb-9 flex flex-col gap-4">
        <p className="text-xl font-bold">{official}</p>
        <ul className="grid gap-1">
          <li>
            <p>
              <span className="font-bold">population: </span>
              {population}
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">region: </span>
              {region}
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">
                {capital?.length === 1 ? "capital: " : "capitals: "}
              </span>
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
