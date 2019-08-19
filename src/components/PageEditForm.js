import React from 'react';

const PageEditForm = ({
  title,
  text,
  city,
  active,
  handleSubmit,
  handleTitleChange,
  handleTextChange,
  handleCityChange,
  handleActiveChange,
  submit
}) => (
    <form onSubmit={handleSubmit}>
      <label>
        name:
      <input type="text" required value={title} onChange={handleTitleChange} />
      </label>
      <label>
        description:
      <input type="text" required value={text} onChange={handleTextChange} />
      </label>
      <label>
        city id:
      <input type="number" min="0" required value={city} onChange={handleCityChange} />
      </label>
      <label>
        active?
      <select value={active} onChange={handleActiveChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </label>
      <input type="submit" value={submit} />
    </form>
  )

export default PageEditForm;