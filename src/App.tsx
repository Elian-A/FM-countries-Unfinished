import Countries from "./components/countries/countries.component";
import CountriesByRegion from "./components/countriesByRegion/countriesByRegion.component";
import Filter from "./components/filters/filter.component";
import { useFiltersStore } from "./store/filters.store";

function App() {
  const region = useFiltersStore((state) => state.region);
  return (
    <main>
      <Filter />
      {region ? <CountriesByRegion region={region} /> : <Countries />}
    </main>
  );
}

export default App;
