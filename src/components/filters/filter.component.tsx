import { useFiltersStore } from "../../store/filters.store";

const Filter = () => {
  const updateRegion = useFiltersStore((state) => state.updateRegion);
  const updateText = useFiltersStore((state) => state.updateText);

  const handleRegionChange = (e: React.ChangeEvent) => {
    const select = e.target as HTMLSelectElement;
    updateRegion(select.value);
  };

  const handleTextFilter = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    updateText(input.value);
  };

  return (
    <div>
      <form>
        <div>
          <div>:b</div>
          <input
            type="text"
            placeholder="Search for a country"
            onChange={handleTextFilter}
          />
        </div>
        <select name="region" id="region" onChange={handleRegionChange}>
          <option value="">Select by region</option>
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
