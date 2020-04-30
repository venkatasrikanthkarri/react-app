import React,{Component} from 'react'

class FetchEaxample extends Component{
    componentDidMount(){
        alert(1)
        const myPost = {
            title: 'A post about true facts',
            body: '42',
            userId: 2
          }
          
          const options = {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
              'Content-Type': 'application/json'
            }
          };
          
          fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(res => {
                console.log(res.status)
                return res.json()})
            .then(res => console.log(res));
    }
    render(){
        return(
            <div>12345</div>
        )
    }
}

export default FetchEaxample