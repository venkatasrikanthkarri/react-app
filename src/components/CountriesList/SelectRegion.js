import React from 'react';
import './SelectRegion.css';
class SelectRegion extends React.Component {
    render() {
        const { countriesList, onChangeSelectedRegion } = this.props;
        const countriesRegions = countriesList.map((country) => country.region);
        const uniqueCountriesRegions = Array.from(new Set(countriesRegions));
        uniqueCountriesRegions.pop();
        uniqueCountriesRegions.push('All');
        return (
            <select className="selectRegion" onChange={onChangeSelectedRegion} style={{background:"inherit"}}>
            {uniqueCountriesRegions.map(region=><option className='options' key={region} value={region}>{region}</option>)}
            </select>
        );
    }
}
export { SelectRegion };