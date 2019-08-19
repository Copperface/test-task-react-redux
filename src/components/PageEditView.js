import React from 'react';

import PageEditForm from './PageEditForm';

const PageEditView = ({
  pageData,
  title,
  text,
  city,
  active,
  handleSubmit,
  handleTitleChange,
  handleTextChange,
  handleCityChange,
  handleActiveChange
}) => (
    <div className="PageEditView">
      {pageData &&
        <div className="PageData">
          <p>id: {pageData.id}</p>
          <p>city: {pageData.city.name}</p>
          <p>created: {pageData.created}</p>
          <p>modified: {pageData.modified}</p>
          <p>title: {pageData.title}</p>
          <p>text: {pageData.text}</p>
          <p>active: {pageData.active.toString()}</p>
        </div>
      }
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
        submit="edit"
      />
    </div>
  );


export default PageEditView;