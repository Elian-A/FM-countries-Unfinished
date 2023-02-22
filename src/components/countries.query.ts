import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import {
  getAllCountries,
  getCountriesByRegion,
  getCountry,
} from "../api/restCountries.api";

const countryVerifier = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z
      .object({})
      .catchall(
        z.object({
          official: z.string(),
          common: z.string(),
        })
      )
      .optional(),
  }),
  capital: z.string().array().optional(),
  region: z.string(),
  subregion: z.string().optional(),
  population: z.number(),
  flags: z.object({
    png: z.string(),
    svg: z.string(),
  }),
  languages: z.object({}).catchall(z.string()).optional(),
  tld: z.string().array().optional(),
  currencies: z
    .object({})
    .catchall(
      z.object({
        name: z.string(),
        symbol: z.string().optional(),
      })
    )
    .optional(),
  borders: z.string().array().optional(),
});

export type country = z.infer<typeof countryVerifier>;

const countriesVerifier = z.array(countryVerifier);

const getParsedCountries = async () => {
  const countries = await (await getAllCountries()).data;
  console.log(countries);
  return countriesVerifier.parse(
    countries
    // countries.filter((_: any, idx: number) => idx < 10)
  );
};

const getParsedCountriesByRegion = async (region: string) => {
  const countries = await (await getCountriesByRegion(region)).data;
  return countriesVerifier.parse(
    countries.filter((_: any, idx: number) => idx < 11)
  );
};

const getParsedCountry = async (countryName: string) => {
  const [country] = await (await getCountry(countryName)).data;
  return countryVerifier.parse(country);
};

const queryOpt = {
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
};

export const useGetCountries = () =>
  useQuery(["countries"], getParsedCountries, queryOpt);

export const useGetCountriesByRegion = (region: string) =>
  useQuery(["countries", region], () => getParsedCountriesByRegion(region), {
    ...queryOpt,
    enabled: !!region,
  });

export const useGetCountry = (country: string) =>
  useQuery(["country", country], () => getParsedCountry(country), queryOpt);
