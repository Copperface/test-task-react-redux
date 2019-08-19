import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pagesActions from '../store/pages/actions';
import * as pagesSelectors from '../store/pages/reducer';

import PageCreateView from '../components/PageCreateView';

class PageCreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      city: '',
      active: 'true'
    };
  }

  handleSubmit = (event) => {
    const {
      title,
      text,
      city,
      active
    } = this.state;

    this.props.dispatch(pagesActions.createPage({ title, text, city, active }));
    event.preventDefault();
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  }

  handleActiveChange = (event) => {
    this.setState({ active: event.target.value });
  }

  render() {
    const {
      props: {
        createdPage,
        createErrors
      },
      state: {
        title,
        text,
        city,
        active
      },
      handleSubmit,
      handleTitleChange,
      handleTextChange,
      handleCityChange,
      handleActiveChange
    } = this;

    return (
      <div className='PageCreateScreen'>
        <PageCreateView
          createdPage={createdPage}
          createErrors={createErrors}
          title={title}
          text={text}
          city={city}
          active={active}
          handleSubmit={handleSubmit}
          handleTitleChange={handleTitleChange}
          handleTextChange={handleTextChange}
          handleCityChange={handleCityChange}
          handleActiveChange={handleActiveChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createdPage: pagesSelectors.getCreatedPage(state),
    createErrors: pagesSelectors.getCreateErrors(state)
  };
}

export default connect(mapStateToProps)(PageCreateScreen);