import CountryCard from "../countryCard/countryCard.component";
import { useGetCountries } from "../countries.query";

const CountriesList = () => {
  const { data: countries, isLoading, error } = useGetCountries();

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

export default CountriesList;
