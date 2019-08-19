import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as catalogActions from '../store/catalog/actions';
import * as catalogSelectors from '../store/catalog/reducer';

import CatalogView from '../components/CatalogView';

class CatalogScreen extends Component {
  componentDidMount() {
    this.props.dispatch(catalogActions.fetchCatalog());
  }

  render() {
    const { props: { cityData } } = this;

    if (!cityData) return this.renderLoading();

    return (
      <div className='CatalogScreen'>
        <CatalogView cityData={cityData} />
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
  return { cityData: catalogSelectors.getCityData(state) };
}

export default connect(mapStateToProps)(CatalogScreen);