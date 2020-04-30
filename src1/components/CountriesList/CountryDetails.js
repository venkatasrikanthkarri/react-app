import React from 'react';
import { withRouter } from "react-router-dom";

import './CountryDetails.css';
import { Header } from "./Header.js";
import CountryBorders from "./CountryBorders.js";
import GoBack from './GoBack.js';


class CountryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            selctedTheme: this.props.styles
        };
        this.formattedData = '';
        this.countryData = '';
        this.borderCountries = [];
        this.borderCountriesNames = [];
        this.borderCountriesAlphaCodes = [];
    }

    componentDidMount = () => {
        this.getCountries();

    }

    async getCountries() {

        fetch('https://restcountries.eu/rest/v2/all')
            .then(response =>
                response.json())
            .then(json => {
                this.setState({ details: json });
            });
    }



    getData = () => {

        let { match } = this.props;
        let { details } = this.state;

        this.countryData = details.find(each =>
            (each.alpha3Code === match.params.countrydetails));

        if (this.countryData.length !== 0) {
            this.borderCountriesAlphaCodes = this.countryData.borders.sort();

            this.borderCountries = details.filter((each) => {
                return this.countryData.borders.includes(each.alpha3Code);
            });

            this.borderCountriesNames = this.borderCountries.map(each => each.name);

        }

    }

    render() {
        let { details } = this.state;
        const styling = this.props.styles;
        if (details.length !== 0) {

            this.getData();

            return (

                <div className="main" >
                <div className="topBackbtnBar">
                    <GoBack/>
                </div>
                <div className="header-countryDetails">
                    <Header  title={styling.title} onChangeTheme={this.props.onChangeTheme}/>
                </div>
                        <div className="countryBox">

                            <div className="countryImgBox">
                                <img className="countryImg" src={this.countryData.flag} alt=""/>
                            </div>

                            <div className="countryDetailsBox">
                            <h3 className="countryName">{this.countryData.name}</h3>

                            <div className="countryDetails">

                                <div className="countryDetailsLeft">
                                    <div><span className="sideHeading">Native Name: </span>{this.countryData.name}</div>
                                    <div><span className="sideHeading">Population: </span>{this.countryData.population}</div>
                                    <div><span className="sideHeading">Region: </span>{this.countryData.region}</div>
                                    <div><span className="sideHeading">Sub Region: </span>{this.countryData.subregion}</div>
                                    <div><span className="sideHeading">Capital: </span>{this.countryData.capital}</div>
                                </div>

                                <div className="countryDetailsRight">
                                    <div><span className="sideHeading">Top Level Domain: </span>{this.countryData.topLevelDomain}</div>
                                    <div><span className="sideHeading">Currencies: </span>{this.countryData.currencies.name}</div>
                                    <div><span className="sideHeading">Languages: </span>{this.countryData.languages.map(each=>each.name+' ')}</div>
                                </div>

                            </div>
                            <div className="borderBtn">
                            <CountryBorders borderCountries={this.borderCountries}
                                borderCountriesNames={this.borderCountriesNames}
                                borderCountriesAlphaCodes={this.borderCountriesAlphaCodes}/>
                            </div>

                        </div>

                    </div>
                </div>
            );

        } else {
            return null;
        }
    }

}

export default withRouter(CountryDetails);