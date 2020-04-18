import React from 'react'
import {observer} from 'mobx-react'
import selectTheme from '../../../stores/selectTheme'
import gridGameStore from '../../../stores/GridGameStore'
import {StyledHeader,StyledThemeBar,ChangeTheme,Level,TopLevel} from './style.js'

@observer
class Header extends React.Component{
    render(){
        return(
            <StyledHeader>
                <TopLevel><b>Top Level:&nbsp; {gridGameStore.topLevel} </b></TopLevel>
                <StyledThemeBar>
                    <Level><b>Level:&nbsp; {gridGameStore.level} </b></Level><ChangeTheme onClick={selectTheme.onChangeTheme} id='0'>Mode:&nbsp;{selectTheme.themeTitle}</ChangeTheme>
                </StyledThemeBar>
            </StyledHeader>
        )
    }
}

export default Header