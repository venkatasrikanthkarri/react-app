class SetStateAsyncronous extends React.Component{
  
    state={
      count:0
    };
  onIncrement=()=>{
    this.setState(prevState=>({
      count:prevState.count+1
    }));
    console.log('first log',this.state.count);
    
    
    this.setState(prevState=>({
      count:prevState.count+1
    }));
    console.log('second log',this.state.count);
    
    
    this.setState(prevState=>({
      count:prevState.count+1
    }));
    console.log('third log',this.state.count);
    
    
    // this.setState({count:this.state.count+1});
    // console.log('first log',this.state.count);
    
    // this.setState({count:this.state.count+1});
    // console.log('second log',this.state.count);
    
    // this.setState({count:this.state.count+1});
    // console.log('third log',this.state.count);
  }
  render(){return (
    <div>
      <button onClick={this.onIncrement}>ClickMe</button>
      <h2>{this.state.count}</h2>
    </div>
  );
}}

  ReactDOM.render(
    <SetStateAsyncronous  />,
    document.getElementById('root')
  );



