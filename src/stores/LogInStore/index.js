import {observable} from 'mobx'

class LoginStore{
    @observable userName
    @observable password
    @observable cookiee
    constructor(){
        this.username='srikanth'
        this.password='Srikanth5121'
        this.cookiee=''
    }
    logIn=(userName,pass)=>{
        if(this.username === userName && this.password === pass){
            console.log(this.username,userName,'/n',this.password,pass)
            this.cookiee='asdfqwerzxcv'
        }
    }

}
const logInStore=new LoginStore()
export default logInStore