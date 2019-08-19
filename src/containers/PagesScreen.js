import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pagesActions from '../store/pages/actions';
import * as pagesSelectors from '../store/pages/reducer';

import PagesView from '../components/PagesView';
import FiterForm from '../components/FilterForm';

class PagesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      active: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(pagesActions.fetchPages());
  }

  handleSubmit = (event) => {
    const { city, active } = this.state;
    this.props.dispatch(pagesActions.fetchPages({ city, active }));
    event.preventDefault();
  }

  handleActiveChange = (event) => {
    this.setState({ active: event.target.value });
  }

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  }

  render() {
    const {
      props: {
        pagesData
      },
      state: {
        city,
        active
      },
      handleSubmit,
      handleActiveChange,
      handleCityChange
    } = this;

    if (!pagesData) return this.renderLoading();

    return (
      <div className='PagesScreen'>
        <FiterForm
          city={city}
          active={active}
          handleSubmit={handleSubmit}
          handleActiveChange={handleActiveChange}
          handleCityChange={handleCityChange}
        />
        <PagesView pagesData={pagesData} />
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
  return { pagesData: pagesSelectors.getPagesData(state) };
}

export default connect(mapStateToProps)(PagesScreen);