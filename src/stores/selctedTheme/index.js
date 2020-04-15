import {observable} from 'mobx'

class ChangeTheme{
    @observable selctedTheme;
    constructor(props){
        super(props);
        
    }
    static themeOptions={
        light: {
          id: "0",
          name: "#fff",
          color: "black",
          title: "White"
        },
        dark: {
          id: "1",
          name: "#2b3945",
          color: "white",
          title: "Dark"
        }
    }
    
    @action 
    onchangeTheme=()=>{
        if(EventTarget.id==='0'){
        
        }

    }
}