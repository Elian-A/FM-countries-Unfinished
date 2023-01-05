import { useFiltersStore } from "../../store/filters.store";
import Countries from "../countries/countries.component";
import CountriesByRegion from "../countriesByRegion/countriesByRegion.component";
import Filter from "../filters/filter.component";

const Index = () => {
  const region = useFiltersStore((state) => state.region);

  return (
    <div className="bg-gray-200">
      <main className="w-[90%] mx-auto  flex flex-col gap-3">
        <Filter />
        {region ? <CountriesByRegion region={region} /> : <Countries />}
      </main>
    </div>
  );
};

export default Index;
