import React from 'react';
import './CountryCard.css';

class CountryCard extends React.Component {
    render() {
        let { details } = this.props;
        return (

            <div className="countryCards" onClick={()=>this.props.navigateToCountryDetailsPage(details.alpha3Code)}>
                <div className="flag">
                <img className="imgTag" src={details.flag} alt=""/>
                </div>
                <h3 className="headings">{details.name}</h3>
                <div className="details">
                <div className='info'>
                <b>Population:</b>&nbsp;{details.population}
                </div>
                <div className='info'>
                <b>Region:</b>&nbsp;{details.region}
                </div>
                <div className='info'>
                <b>Capital:</b>&nbsp;{details.capital}
                </div>
                </div>
            </div>
        );
    }

}
export { CountryCard };