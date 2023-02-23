import { useNavigate, useParams } from "react-router-dom";
import Back from "../SVGs/back";
import { useGetCountry } from "../countries.query";

const Country = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  if (!country) navigate("/");

  const {
    data: countryData,
    isLoading,
    error,
    isError,
  } = useGetCountry(country as string);

  if (!countryData || isLoading) return <p>loading</p>;
  if (isError) return <p>Error: {JSON.stringify(error, null, 2)}</p>;

  const {
    name: { official, nativeName },
    flags: png,
    population,
    region,
    capital,
    languages,
    subregion,
    borders,
    tld,
    currencies,
  } = countryData;

  const getNativeName = () => {
    if (!nativeName || !languages) return "No native name";
    return nativeName[languages[0]].common;
  };

  return (
    <main>
      <div>
        <div>
          <button className="flex">
            <Back /> <span>Back</span>
          </button>
        </div>
        <div>
          <div>
            <img src={countryData?.flags.png} alt={country} />
          </div>
          <div>
            <h2>{official}</h2>
            <div>
              <ul>
                <li>
                  <p>
                    <span>Native Name: </span>
                    <span>
                      {nativeName
                        ? nativeName[Object.keys(nativeName)[0]].common
                        : "Info not found"}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Population: </span>
                    <span>{population}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Region: </span>
                    <span>{region}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Sub Region: </span>
                    <span>{subregion}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Capital/s: </span>
                    <span>{capital?.join(",") || "Info not found"}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Top Level Domain: </span>
                    <span>{tld}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Currencies: </span>
                    <span>
                      {currencies
                        ? Object.keys(currencies).map(
                            (currency) => currencies[currency].name
                          )
                        : "Info not found"}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages: </span>
                    <span>
                      {languages
                        ? Object.values(languages).join(",")
                        : "Info not found"}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Country;
