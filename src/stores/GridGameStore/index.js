<<<<<<< HEAD
import {observable,action} from 'mobx'
import Cell from '../models/cell'
import gameLevels from './GridDetails.json'

=======
import {observable} from 'mobx'
import Cell from '../models/cell'
>>>>>>> 92fc89316f3d62ad7b74c295fa9d52deef1b6667

class GameStore{
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted

<<<<<<< HEAD
    constructor(){
        this.level=0
        this.topLevel=0
        this.currentLevelGridCells=[]
        this.selectedCellsCount=0
        this.isGameCompleted=false
        this.gridWidth=0

    }

    @action
    onCellClick=(object)=>{
      let isClickedWrongCell=false
        if(object.isHidden&&!isClickedWrongCell ){
            this.incrementSelectedCellsCount()
        }
        else{
          isClickedWrongCell=true
            this.resetSelectedCellsCount()
            this.goToInitialLevelAndUpdateCells()              
        }

        if(this.selectedCellsCount===this.level+3){
          (this.selectedCellsCount===gameLevels.length+2)?
          this.isGameCompleted=true:
          setTimeout(()=>this.goToNextLevelAndUpdateCells(),200);
        }
    }

    @action
    shuffleArray=(array)=> {
      for (let index = array.length - 1; index > 0; index--) {
        const shuffledIndex = Math.floor(Math.random() * (index + 1));
        const shuffledValue = array[index];
        array[index] = array[shuffledIndex];
        array[shuffledIndex] = shuffledValue;
      }
      return array
    };

    @action
    setGridCells=()=>{
      this.currentLevelGridCells=[]
        for(let i=0;i<(gameLevels[this.level].gridSize)**2;i++)
        {
          this.gridWidth=gameLevels[this.level].gridWidth
            let cellModel=new Cell()
            if(i<gameLevels[this.level].gridSize){
                cellModel.isHidden=true
            }
            this.currentLevelGridCells.push(cellModel)
        }
        this.currentLevelGridCells=this.shuffleArray(this.currentLevelGridCells)
    }

    @action
    goToNextLevelAndUpdateCells=()=>{
      this.level++
      this.setTopLevel()
      this.resetSelectedCellsCount()
      this.setGridCells()
    }
    @action
    goToInitialLevelAndUpdateCells=()=>{
      this.level=0
      this.resetSelectedCellsCount()
      this.setGridCells()

    }
    @action
    resetSelectedCellsCount=()=>{
      this.selectedCellsCount=0
    }

    @action
    incrementSelectedCellsCount=()=>{
      this.selectedCellsCount++

    }

    @action
    onPlayAgainClick=()=>{
      this.isGameCompleted=false
      this.level++
      this.setTopLevel()
      this.resetGame()
    }

    @action
    resetGame=()=>{
      this.level=0
      this.goToInitialLevelAndUpdateCells()
    }

    @action
    setTopLevel=()=>{
      if(this.level>this.topLevel)
      {
        this.topLevel=this.level
      }
    }
}

const gridGameStore=new GameStore()
export default gridGameStore
=======

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
>>>>>>> 92fc89316f3d62ad7b74c295fa9d52deef1b6667
