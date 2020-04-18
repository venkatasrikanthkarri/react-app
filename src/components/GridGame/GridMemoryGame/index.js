import {observer} from 'mobx-react';
import React from 'react';

import gridGameStore from '../../../stores/GridGameStore'
import Header from '../Header'
import GameField from '../GameField'
import GameResult from '../GameResult'

import StyledGridGame from './style.js'

@observer
class GridMemoryGame extends React.Component{

    constructor(props){
        super(props)
        this.array=gridGameStore.setGridCells()
    }

    render(){
        if(!gridGameStore.isGameCompleted){
            return(
                <StyledGridGame>
                <Header/>
                <GameField />
                </StyledGridGame>
            )
        }
        return(

                <GameResult/>
        )
    }
}

export default GridMemoryGame