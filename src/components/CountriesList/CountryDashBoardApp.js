import React from 'react';
import { Header } from './Header.js';
import { CountriesFilterBar } from './CountriesFilterBar.js';
import { CountryCard } from './CountryCard.js';
import { withRouter } from "react-router-dom";

import './CountryDashBoardApp.css';
import './SearchCountry.css';


let data = [];
let keys = 0;
class CountriesDashboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesList: [],
            filteredCountriesList: [],
            selectedTheme: this.props.styles
        };

        this.searchedText = '';
        this.searchedRegion = 'All';
    }

    componentDidMount = () => {
        this.getCountries();
    }

    getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response =>
                response.json())
            .then(json => {
                data = json;
                this.setState({ countriesList: data });
                this.setState({ filteredCountriesList: data });
            });
    }


    onChangeSearchText = (event) => {

        this.searchedText = event.target.value;
        this.filterCountriesBySearchText(this.searchedText);
    }

    onChangeSelectedRegion = (event) => {
        this.searchedRegion = event.target.value;
        this.filterCountriesBySelectedRegion(this.searchedRegion);
    }

    filterCountriesBySearchText = (searchedText) => {
        let filteredCountries = '';
        const { countriesList } = this.state;
        if (this.searchedRegion !== "All") {
            filteredCountries = countriesList.filter((each) => {
                return (each.name.toLowerCase().includes(searchedText) && each.region.includes(this.searchedRegion));

            });
        } else {

            filteredCountries = countriesList.filter((each) => {
                return (each.name.toLowerCase().includes(searchedText));

            });

        }

        this.setState({ filteredCountriesList: filteredCountries });

    }

    filterCountriesBySelectedRegion = (searchedRegion) => {

        let filteredCountries = this.state.countriesList.filter((each) => {
            return (each.region.includes(searchedRegion));
        });

        this.setState({ filteredCountriesList: filteredCountries });
        if (searchedRegion === 'All') {
            this.setState({ filteredCountriesList: this.state.countriesList });
        }

    }
    displayCountries = () => {
        keys = 0;

        let nationCards = this.state.filteredCountriesList.map(each => {
            return <CountryCard key={keys++} details={each} navigateToCountryDetailsPage={this.navigateToCountryDetailsPage} />;

        });
        return nationCards;

    }

    navigateToCountryDetailsPage = (event) => {

        let { history } = this.props;
        history.push({ pathname: `/Countries-Dashboard-App/${event}` });
    }
    render() {
        const styling = this.props.styles;
        const { countriesList } = this.state;
        const { onChangeTheme } = this.props;
        return (
            <div className="CountriesDashboardAppContainer "  >
            <div className="HeaderFilterBar">
            <Header title={styling.title} onChangeTheme={onChangeTheme} />
            <CountriesFilterBar countriesList={countriesList}  onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion}/>
            </div>
            <div className="countriesListContainer">
            {this.displayCountries()}
            </div>
            </div>
        );
    }

}

export default withRouter(CountriesDashboardApp);