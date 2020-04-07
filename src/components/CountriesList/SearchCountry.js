import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchCountry.css';

class SearchCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CountriesList: this.props.CountriesList,
            filteredCountriesByText: []
        };
    }


    render() {
        return (
            <div className="searchBarContainer">
          <div><AiOutlineSearch/></div>&nbsp;<input className="searchBar" type="text" style={{background:"inherit"}} onChange={this.props.onChangeSearchText} placeholder='Search for the Country...' />
        </div>
        );
    }
}

export { SearchCountry };