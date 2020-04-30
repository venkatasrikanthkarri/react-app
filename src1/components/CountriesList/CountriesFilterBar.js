import React from 'react';
import { SearchCountry } from './SearchCountry.js';
import { SelectRegion } from './SelectRegion.js';

import './CountriesFilterBar.css';


class CountriesFilterBar extends React.Component {
    render() {
        return (

            <div className="countriesFilterBar">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} />
            <SelectRegion countriesList={this.props.countriesList} onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
            </div>

        );
    }

}

export { CountriesFilterBar };