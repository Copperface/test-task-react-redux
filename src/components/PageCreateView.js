import React from 'react';

import PageEditForm from './PageEditForm';

const PageCreateView = ({
  createdPage,
  createErrors,
  title,
  text,
  city,
  active,
  handleSubmit,
  handleTitleChange,
  handleTextChange,
  handleCityChange,
  handleActiveChange
}) => {
  function renderCreatedPage(page) {
    return (
      <p>Created</p>
    );
  }

  function renderCreateErrors(page) {
    return (
      <p>Error</p>
    );
  }

  return (
    <div className="PageCreateView">
      <PageEditForm
        title={title}
        text={text}
        city={city}
        active={active}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleTextChange={handleTextChange}
        handleCityChange={handleCityChange}
        handleActiveChange={handleActiveChange}
        submit="create"
      />
      <p>Result:</p>
      <div className="PageCreateResult">
        {createdPage && renderCreatedPage(createdPage)}
        {createErrors && renderCreateErrors(createErrors)}
      </div>
    </div>
  );
}

export default PageCreateView;