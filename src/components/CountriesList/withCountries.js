import React from 'react';

export default function WithCountriesHoc(Component){
    return class extends Component{
        constructor(props){
            super(props);
            this.state={
                countriesList:{}
            }
        }

        componentDidMount(){
            fetch('https://restcountries.eu/rest/v2/all')
            .then(response =>
                response.json())
            .then(json => {
                this.setState({ countriesList: json });
            });
        }
        

        render(){
            return(
                <div>hello</div>
            )
        }

    }
}