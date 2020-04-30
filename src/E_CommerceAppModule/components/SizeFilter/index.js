import React,{Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import {FilterContainer,Sizes,Size} from './style.js'

@observer
class SizeFilter extends Component{
    @observable background
    @observable color
    @observable sizes
    constructor(props){
        super(props);
        this.background='#edf2f7'
        this.color='black'
        this.sizes=[{size:'XS',isClicked:false},
                    {size:'S',isClicked:false},
                    {size:'M',isClicked:false},
                    {size:'L',isClicked:false},
                    {size:'XL',isClicked:false},
                    {size:'XXL',isClicked:false}]
    }
    
    onSelectSize=(event)=>{
        this.sizes.forEach(each=>{if(each.size===event.target.value){
                                    each.isClicked=!each.isClicked
                                    }
                                })
        this.props.onSelectSize(event.target.value)
                            }

    render(){
        return(
            <FilterContainer>
                <Sizes>Sizes:</Sizes>
                {this.sizes.map(each=><Size key={Math.random()} onClick={this.onSelectSize} bg={each.isClicked?'black':'white'} color={each.isClicked?'#edf2f7':'black'} value={each.size}>{each.size}</Size>)}
            </FilterContainer>
        )
    }
}

export default SizeFilter