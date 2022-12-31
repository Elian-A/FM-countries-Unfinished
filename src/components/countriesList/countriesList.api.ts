import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const countriesURL = "https://restcountries.com/v3.1/all";

const countryVerifier = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
  }),
  capital: z.string().array().optional(),
  region: z.string(),
  population: z.number(),
  flags: z.object({
    png: z.string(),
    svg: z.string(),
  }),
});

export type country = z.infer<typeof countryVerifier>

const countriesVerifier = z.array(countryVerifier);

const getCountries = async () => {
  const countries = await (await fetch(countriesURL)).json();
  return countriesVerifier.parse(countries.filter((_: any, idx: number) => idx < 10));
};

const queryOpt = {
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
}

export const useGetCountries = () => useQuery(["countries"], getCountries, queryOpt);;