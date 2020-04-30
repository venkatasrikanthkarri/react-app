import React,{Component} from 'react'
import {observer} from 'mobx-react'
import SelectSort from './style.js'

@observer
class ProductSort extends Component{
    onSelectSortBy=(event)=>{
        this.props.onChangeSortBy(event.target.value)
    }

    render(){
        return(
                <SelectSort id={Math.random()} onChange={this.onSelectSortBy}>
                    <option hidden>Select</option>
                    <option value="A-Z">Lowest to highest</option>
                    <option value="Z-A">Highest to lowest</option>
                </SelectSort>
        )
    }
}

export default ProductSort