import CountryCard from "../countryCard/countryCard.component";
import { useGetCountries } from "../countries.query";
import { useFiltersStore } from "../../store/filters.store";
import { filterCountries } from "../../utils/filterCountries.utils";

const Countries = () => {
  const { data: countries, isLoading, error } = useGetCountries();
  const filter = useFiltersStore((state) => state.text);

  if (isLoading || !countries) return <p>loading</p>;
  if (error) return <p>error</p>;

  const filteredCountries = filterCountries(filter, countries);

  return (
    <div>
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

export default Countries;
