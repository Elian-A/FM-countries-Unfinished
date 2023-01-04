import { useFiltersStore } from "../../store/filters.store";
import Lupe from "../SVGs/lupe";

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
    <form className="w-[95%] pt-6 pb-4 mx-auto flex flex-col gap-9">
      <div className="max-w-sm relative shadow-md bg-white rounded-lg">
        <label
          htmlFor="textFilter"
          className="text-2xl absolute top-3 left-6 cursor-pointer"
        >
          <Lupe />
        </label>
        <input
          id="textFilter"
          name="textFilter"
          type="text"
          placeholder="Search for a country..."
          onChange={handleTextFilter}
          className="w-full pl-16 py-3 rounded-lg"
        />
      </div>
      <div className="max-w-xs">
        <select
          name="region"
          id="region"
          onChange={handleRegionChange}
          className="w-[60%] bg-white rounded-lg py-4 pl-4 cursor-pointer"
        >
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
