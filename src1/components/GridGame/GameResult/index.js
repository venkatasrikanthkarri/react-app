import React from 'react'
import {observer} from 'mobx-react'
import selectTheme from '../../../stores/selectTheme'
import gridGameStore from '../../../stores/GridGameStore'
import Header from '../Header/index'
import {StyledGameResetContainer,StyledThemeBar,ChangeTheme,Level,TopLevel,FinalLevel,Congrats,PlayAgain} from './style.js'

@observer
class GameResult extends React.Component{
    render(){
        
        return(
                <StyledGameResetContainer bg={selectTheme.themeStyle.background} color={selectTheme.themeStyle.color}>
                    {/* <TopLevel>Top Level</TopLevel>
                    <StyledThemeBar><Level>Level:</Level><ChangeTheme id='0' onClick={selectTheme.onChangeTheme}>{selectTheme.themeTitle}</ChangeTheme></StyledThemeBar> */}
                    <Header/>
                    <FinalLevel>{gridGameStore.level}</FinalLevel>
                    <Congrats>Congratulations! You completed all the levels</Congrats>
                    <PlayAgain onClick={gridGameStore.onPlayAgainClick}>Play Again</PlayAgain>
                </StyledGameResetContainer>
        );
    }
}
 export default GameResult