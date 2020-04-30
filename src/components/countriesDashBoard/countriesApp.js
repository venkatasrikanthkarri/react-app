let data=[];
let keys=0;

class CountriesDashboardApp extends React.Component{
    constructor(props){
        super(props);
    this.state={
        countriesList:[],
        filteredCountriesList:[]
    };
    }

    componentDidMount=()=>{
     this.getCountries();   
    }
    
    
    getCountries=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>
        response.json())
        .then(json=>{
         data=json;
         this.setState({countriesList:data});
         this.setState({filteredCountriesList:data});
        });
    }
    
    
    onChangeSearchText=(event)=>{
        let searchedText=event.target.value;
        this.filterCountriesBySearchText(searchedText);
    }
    
    onChangeSelectedRegion=(event)=>{
        let searchedRegion=event.target.value;
        this.filterCountriesBySelectedRegion(searchedRegion);
    }
    
    filterCountriesBySearchText=(searchedText)=>{
        console.log(searchedText);
        let filteredCountries=this.state.filteredCountriesList.filter((each)=>{
          return (each.name.toLowerCase().search(searchedText)!=-1);

        });
        this.setState({filteredCountriesList:filteredCountries});
        
        
    }
    
    filterCountriesBySelectedRegion=(searchedRegion)=>{
        
        let filteredCountries=this.state.countriesList.filter((each)=>{
          return (each.region.search(searchedRegion)!=-1);

        });
        if(searchedRegion!=="All"){
        this.setState({filteredCountriesList:filteredCountries});            
        }
        else{
        this.setState({filteredCountriesList:data});            
        }
        
        
    }
    displayCountries=()=>{
        keys=0;
        let nationCards=this.state.filteredCountriesList.map(each=>{
            return <CountryCard key={keys++}
            flags={each.flag}
            name={each.name}
            population={each.population}
            region={each.region}
            capital={each.capital}/>;


        });
        return nationCards;
        
        
    }
    render(){
        return(
            <div className="sections">
            <Header/>
            <CountriesFilterBar onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion}/>
            <div className="countriesList">
            {this.displayCountries()}
            </div>
            </div>
            );
    }

}




class Header extends React.Component{
    render(){
        return(
            <div className="header">
            <h2 className="heading">Where in the world?</h2>
            <button className="changeModeBtn">Light Mode</button>
            </div>

            );
    }
}


class CountriesFilterBar extends React.Component{
    render(){
        return(
            
            <div className="countriesFilterBar">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} />
            <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
            </div>

            );
    }

}



class SelectRegion extends React.Component{
    render(){
        return(
        
        <select className="selectRegion" onChange={this.props.onChangeSelectedRegion}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>
        
        );
    }
}



class SearchCountry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            CountriesList:this.props.CountriesList,
            filteredCountriesByText:[]
        };
    }
    

    render(){
        return(
            <input className="searchBar" type="text" onChange={this.props.onChangeSearchText} placeholder="Search for the Country..." />
            );
    }
}

class CountryCard extends React.Component{

    render(){
        return(

            <div className="countryCards">
                <div className="flag">
                <img className="imgTag" src={this.props.flags} />
                </div>
                <div className="details">
                <h4 className="headings">{this.props.name}</h4>
                <h5 className="headings">Population:</h5>
                <span>{this.props.population}</span>
                <div>
                <h5 className="headings">Region:</h5>
                <span>{this.props.region}</span>
                </div>
                <div>
                <h5 className="headings">Capital: </h5>
                <span>{this.props.capital}</span>
                </div>
                </div>
            </div>
            );
    }

}





{/*


class Countries extends React.Component{
    rendercountries=()=>{
        let nationCards='';
        keys=0;
        nationCards=this.props.CountriesList.map(each=>{

            return <CountryCard key={keys++}
            flags={each.flag}
            name={each.name}
            population={each.population}
            region={each.region}
            capital={each.capital}/>;


        });
        return nationCards;
    }
    render(){
        return(
            <div className="countriesList">
            {this.rendercountries()}
            </div>
            );
    }

}


class CountryCard extends React.Component{

    render(){
        return(
            <div className="countryCards">
                <div className="flag">
                <img className="imgTag" src={this.props.flags} />
                </div>
                <div className="details">
                <h4 className="headings">{this.props.name}</h4>
                <h5 className="headings">Population:</h5>
                <span>{this.props.population}</span>
                <div>
                <h5 className="headings">Region:</h5>
                <span>{this.props.region}</span>
                </div>
                <div>
                <h5 className="headings">Capital: </h5>
                <span>{this.props.capital}</span>
                </div>
                </div>
            </div>
            );
    }

}



*/}


ReactDOM.render(<CountriesDashboardApp/>,document.getElementById('root'));