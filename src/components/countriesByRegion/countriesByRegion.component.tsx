import { FC } from "react";
import { useGetCountriesByRegion } from "../countries.query";
import CountryCard from "../countryCard/countryCard.component";

const CountriesByRegion: FC<{ region: string }> = ({ region }) => {
  const { data: countries, isLoading, error } = useGetCountriesByRegion(region);

  if (isLoading || !countries) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </div>
  );
};

export default CountriesByRegion;
