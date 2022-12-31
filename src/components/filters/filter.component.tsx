const Filter = () => {
  return (
    <div>
      <form>
        <div>
          <div>:b</div>
          <input type="text" placeholder="Search for a country" />
        </div>
        <select name="region" id="region">
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
