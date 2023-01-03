import { country } from "../components/countries.query";

export const filterCountries = (filter: string, countries: country[]) =>
  countries.filter(({ name }) =>
    name.official.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
