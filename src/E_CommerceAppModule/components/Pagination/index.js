import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
@inject('productStore')
@observer
class Pagination extends Component{

    render(){
        const{increaseBoundary,decreaseBoundary,boundary}=this.props.productStore
        return(
            <div>
                <span onClick={decreaseBoundary} >&lt;</span>
                <span>{boundary}</span>
                <span>{boundary+1}</span>
                <span onClick={increaseBoundary}>&gt;</span>
            </div>
        )
    }
}

export default Pagination