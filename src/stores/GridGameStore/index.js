import {observable} from 'mobx'
import Cell from '../models/cell'

class GameStore{
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted


    constructor(){
        this.level=0
        this.topLevel=0
        this.currentLevelGridCells=0
        this.selectedCellsCount=0
        this.isGameCompleted=false
        this.gameLevels=[
            {
              "gridSize": 3, 
              "hiddenCellCount": 3, 
              "gridWidth": 300 
            },

            {
                "gridSize": 4, 
                "hiddenCellCount": 4, 
                "gridWidth": 280 
              },

              {
                "gridSize": 5, 
                "hiddenCellCount": 5, 
                "gridWidth": 260 
              },

              {
                "gridSize": 6, 
                "hiddenCellCount": 6, 
                "gridWidth": 240 
              },

              {
                "gridSize": 7, 
                "hiddenCellCount": 7, 
                "gridWidth": 220 
              }              
          ]
    }

    onCellClick=(isHidden)={
        if(isHidden){
            this.incrementSelectedCellsCount()
        }
        else{
            this.resetSelectedCellsCount()
            this.goToInitialLevelAndUpdateCells()
        }

        if(this.selectedCellsCount===this.level){
            
        }

    }

    setGridCells=()=>{
        for(const i=0;i<(this.level+3)**2;i++)
        {
            this.currentLevelGridCells.push(this.gameLevels[this.level])
        }

    }

    goToNextLevelAndUpdateCells=()=>{

    }

    goToInitialLevelAndUpdateCells=()=>{

    }

    resetSelectedCellsCount=()=>{

    }

    incrementSelectedCellsCount=()=>{

    }

    onPlayAgainClick=()=>{

    }

    resetGame=()=>{

    }

    setTopLevel=()=>{

    }
}
