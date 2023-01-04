import Countries from "./components/countries/countries.component";
import CountriesByRegion from "./components/countriesByRegion/countriesByRegion.component";
import Filter from "./components/filters/filter.component";
import Header from "./components/header/header.component";
import { useFiltersStore } from "./store/filters.store";

function App() {
  const region = useFiltersStore((state) => state.region);

  return (
    <div className="bg-gray-200">
      <Header />
      <main className="w-[90%] mx-auto  flex flex-col gap-3">
        <Filter />
        {region ? <CountriesByRegion region={region} /> : <Countries />}
      </main>
    </div>
  );
}

export default App;
