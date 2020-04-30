import React,{Component} from 'react'
import {LoaderContainer,MainBox,Block1,Block2,Block3} from './style.js'
class Loader extends Component{
render(){
    return(
        <LoaderContainer> 
            <MainBox>
                <Block1></Block1>
                <Block2></Block2>
                <Block3></Block3>
            </MainBox>
        </LoaderContainer>
       
    )
}
}
export default Loader