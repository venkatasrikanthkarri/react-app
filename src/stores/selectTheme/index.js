// import React from 'react'
import {observable} from 'mobx'
class SelectTheme{
    @observable themeTitle
    @observable themeStyle

    constructor(props){
        this.themeTitle="Light"
        this.themeStyle={
            background:'#fff',
            color:'black',
            activeCellBg:'#81e6d9'
        }
        this.themeOptions={
            light: {
              background: "#fff",
              color: "black",
              activeCellBg:'#81e6d9'
            },
            dark: {
              background: "#1a202c",
              color: "white",
              activeCellBg:'#68d391'
            },
            titleDark: "Dark",
            titleLight: "Light"
        }
        
    }
    onChangeTheme=(e)=>{
        
        
if(e.target.id==='0'){
    let title=this.themeOptions.titleDark
    this.themeTitle=title
    e.target.id='1'
    this.themeStyle=this.themeOptions.dark
    
}
else{
    let title=this.themeOptions.titleLight
    this.themeTitle=title
    e.target.id='0'
    this.themeStyle=this.themeOptions.light

}
    }
 }
const selectTheme= new SelectTheme()
 export default selectTheme