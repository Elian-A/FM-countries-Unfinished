import { FC } from "react";

const CountryCard: FC<{ country: {} }> = ({ country }) => {
  return (
    <div>
      <img src="#" alt="flag" />
      <div>
        <p>country</p>
        <ul>
          <li>
            <p>
              <span>population:</span>
              81.770.900
            </p>
            <p>
              <span>population:</span>
              81.770.900
            </p>
            <p>
              <span>population:</span>
              81.770.900
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
