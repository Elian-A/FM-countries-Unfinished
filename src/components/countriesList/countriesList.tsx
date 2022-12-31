import React from "react";

const CountriesList = () => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
