import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { getCountriesByRegion } from "../restCountries.api";

const Filter = () => {
  const [region, setRegion] = useState("");

  const { refetch } = useQuery(
    ["countries"],
    async () => {
      return (await getCountriesByRegion(region)).data;
    },
    {
      enabled: !!region,
      refetchOnWindowFocus: false,
    }
  );

  const handleSelect = (e: ChangeEvent) => {
    const $select = e.target as HTMLSelectElement;
    const region = $select.value;
    if (!region) return;
    setRegion(region);
    refetch();
  };
  return (
    <div>
      <form>
        <div>
          <div>:b</div>
          <input type="text" placeholder="Search for a country" />
        </div>
        <select name="region" id="region" onChange={handleSelect}>
          <option>Select by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
