import React from 'react';

const FilterForm = ({
  city,
  active,
  handleSubmit,
  handleCityChange,
  handleActiveChange
}) => (
    <form onSubmit={handleSubmit}>
      <label>
        city id:
        <input type="number" name="city" value={city} onChange={handleCityChange} min="0" />
      </label>
      <label>
        active?
        <select value={active} onChange={handleActiveChange}>
          <option value="true">true</option>
          <option value="false">false</option>
          <option value="">clear</option>
        </select>
      </label>
      <input type="submit" value="filter" />
    </form>
  )

export default FilterForm;