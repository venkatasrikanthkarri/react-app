import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { withRouter } from "react-router-dom";
import './GoBack.css';
class GoBack extends React.Component{
	goToPrevious=()=>{
        let {history} = this.props;
        console.log(history);
            history.goBack();
    }
    render(){
    	return(
    		<div className="backBtnContainer">
    			<button className='goBack' type="button" onClick={this.goToPrevious}>
                      <IoIosArrowBack/>
                    </button>
            </div>
    		)
    }
}

export default withRouter(GoBack);