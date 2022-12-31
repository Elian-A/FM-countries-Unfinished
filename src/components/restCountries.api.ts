import axios from "axios";

const countries = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})
    
export const getAllCountries = () => countries.get("/all")

export const getCountriesByRegion = (region: string) => countries.get(`/region/${region}`)