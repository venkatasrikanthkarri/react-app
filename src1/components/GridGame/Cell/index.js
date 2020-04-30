import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import gridGameStore from '../../../stores/GridGameStore'
import SelectTheme from '../../../stores/selectTheme'
import {FadeIn,BoxStretch,BoxShrink,BoxStetchHorizontally} from '../../../stores/Animations'
import {StyledHiddenCell,AnimatedCell} from './style.js'

@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    @observable wrongcellBg
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true
        this.isClickedOnCell=false

        this.object=this.props.object
        this.resetHiddenCellTimer=0
        this.resetGridTimer=0
        this.bg=''
        this.commonBg='#2d3748'
        this.wrongcellBg='#2d3748'
        this.animation=FadeIn
        this.a=0

    }


    componentDidMount(){
            this.resetHiddenCellTimer=setTimeout(()=>{
                this.shouldShowHiddenCells=false                
                this.resetGridTimer=setTimeout(()=>{gridGameStore.goToInitialLevelAndUpdateCells()},(gridGameStore.level+3)*2000)
            },(gridGameStore.level+3)*1000)       
    }

    componentWillUnmount(){
        clearTimeout(this.resetHiddenCellTimer)
        clearTimeout(this.resetGridTimer)
        clearTimeout(this.a)
    }

    onCellClick=(event)=>{
        if(!this.isClickedOnCell&&!this.shouldShowHiddenCells&&this.object.isHidden){
            this.isClickedOnCell=true
            this.animation=BoxStretch
            gridGameStore.onCellClick(this.object)
            
        }
        
        else if(!this.shouldShowHiddenCells&&!this.object.isHidden){
            this.wrongcellBg='#f56565'
            this.animation=BoxStetchHorizontally
            setTimeout(()=>{
                this.isClickedOnCell=true
            gridGameStore.onCellClick(this.object)
            },200)
        }
    }

    renderCells=()=>{
        const {object} =this.props
        this.bg=''
        this.commonBg='#2d3748'
        if((object.isHidden && this.shouldShowHiddenCells) || (object.isHidden&&this.isClickedOnCell)){
            this.bg=SelectTheme.themeStyle.activeCellBg        
        }
        else if(!this.shouldShowHiddenCells&&this.object.isHidden){
            // this.bg='#2d3748'
            this.animation=BoxShrink
            
        }
        else{
            this.bg=this.wrongcellBg
        }
    }

    render(){
    const {object} =this.props
    this.renderCells()
    return(<StyledHiddenCell  id={object.id} onClick={this.onCellClick} 
    width={(gridGameStore.gridWidth-8*(gridGameStore.level+3))/(gridGameStore.level+3)} 
    bgc={this.commonBg}  animation={FadeIn}>
    <AnimatedCell bg={this.bg} animation={this.animation}></AnimatedCell>
    </StyledHiddenCell>)
    }
}
export default Cell