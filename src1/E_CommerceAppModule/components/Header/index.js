import React,{Component} from 'react'
import {observer} from 'mobx-react'
import ProductSort from '../ProductSort'
import {HeaderContainer,ProductsCount,SortPriceBy} from './style.js'

@observer
class Header extends Component{
    render(){
        const{productCount,onChangeSortBy}=this.props
        return(
            <HeaderContainer>
                <ProductsCount>{productCount} Product(s) found.</ProductsCount>
                <SortPriceBy>
                    Sort price by: &nbsp; 
                <ProductSort onChangeSortBy={onChangeSortBy}/>
                </SortPriceBy>
                
            </HeaderContainer>
        )
    }
}
export default Header