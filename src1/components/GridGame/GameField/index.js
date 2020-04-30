import {observer} from 'mobx-react';

import React from 'react';

import Cell from '../Cell'

import gridGameStore from '../../../stores/GridGameStore'
import StyledGameField from './style.js'

@observer
class GameField extends React.Component{
       render(){
        const cells=gridGameStore.currentLevelGridCells        
        return(
            <StyledGameField gridWidth={gridGameStore.gridWidth} >
            {cells.map(each=><Cell key={Math.random()} object={each}/>)}
            </StyledGameField>
        );
    }
}

export default GameField
