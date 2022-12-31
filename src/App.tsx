import CountriesList from "./components/countriesList/countriesList";
import Filter from "./components/filters/filter.component";

function App() {
  return (
    <main>
      <div>
        <Filter />
        <CountriesList />
      </div>
    </main>
  );
}

export default App;
