import { FC } from "react";
import { useFiltersStore } from "../../store/filters.store";
import { filterCountries } from "../../utils/filterCountries.utils";
import { useGetCountriesByRegion } from "../countries.query";
import CountryCard from "../countryCard/countryCard.component";

const CountriesByRegion: FC<{ region: string }> = ({ region }) => {
  const { data: countries, isLoading, error } = useGetCountriesByRegion(region);
  const filter = useFiltersStore((state) => state.text);

  if (isLoading || !countries) return <p>loading</p>;
  if (error) return <p>error</p>;

  const filteredCountries = filterCountries(filter, countries);

  return (
    <div className="grid justify-center gap-10">
      {filter
        ? filteredCountries.map((country) => (
            <CountryCard key={country.name.official} country={country} />
          ))
        : countries.map((country) => (
            <CountryCard key={country.name.official} country={country} />
          ))}
    </div>
  );
};

export default CountriesByRegion;
