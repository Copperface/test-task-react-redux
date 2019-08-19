import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pagesActions from '../store/pages/actions';
import * as pagesSelectors from '../store/pages/reducer';

import PageEditView from '../components/PageEditView';
import { isNull } from 'util';

class PageEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidID: false,
      title: '',
      text: '',
      city: '',
      active: true,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (!id || isNaN((parseInt(id, 10))) || (parseInt(id, 10)) <= 0) return;
    this.setState({ isValidID: true });
    this.props.dispatch(pagesActions.fetchPage(id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return;
    if (!nextProps.pageData) return;
    const { title, text, active, city: { id: city } } = nextProps.pageData;
    this.setState({ title, text, active, city });
  }

  handleSubmit = (event) => {
    const {
      title,
      text,
      city,
      active
    } = this.state;

    this.props.dispatch(pagesActions.editPage(this.props.match.params.id, { title, text, city, active }));
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
        pageData
      },
      state: {
        isValidID,
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

    if (!isValidID || isNull(pageData)) return (<p>Page dont find</p>);
    if (!pageData) return this.renderLoading();

    return (
      <div className="PageEditScreen">
        <PageEditView
          pageData={pageData}
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

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageData: pagesSelectors.getPageData(state),
    pageEditErrors: pagesSelectors.getPageEditErrors(state),
  };
}

export default connect(mapStateToProps)(PageEditScreen);