import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import {observer} from 'mobx-react'
import { observable } from 'mobx'
import Loader from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css'
import { FiShoppingCart } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';

import logInStore from '../../stores/LogInStore'

@observer
class LoginPage extends Component{
    @observable username
    @observable pass
    constructor(props){
        super(props);
        this.username=''
        this.pass=''
        this.cookie='asdfqwerzxcv'
    }

    onchangeUserName=(event)=>{
        this.username=event.target.value
    }

    onchangePass=(event)=>{
        this.pass=event.target.value
    }

    logIn=(event)=>{
        toast('i was toasted!!!', {
            position: toast.POSITION.BOTTOM_CENTER,
            dragabble:true,
            autoClose:2000,
            type:'error',
            hideProgressBar:true
          })
        logInStore.logIn(this.username,this.pass)
        this.username=''
        this.pass=''
        this.checkCookiees()   
        event.preventDefault()
    }
    checkCookiees=()=>{
    
        if(this.cookie=== logInStore.cookiee){          

            const {history}=this.props
            history.push('/grid-game')
          }
    }

    render(){    
               
            return(

            <div>
           <Loader type="TailSpin" color="#00BFFF" height={60} width={60}/>
           <ToastContainer/>
                <form onSubmit={this.logIn}>
                    <input type='text' value={this.username} onChange={this.onchangeUserName} placeholder='enter UserName'/>
                    <input type='password' value={this.pass} onChange={this.onchangePass} placeholder='enter Password'/>
                    <button type='button' onClick={this.logIn}>LogIn</button>
                </form>

                <FiShoppingCart  size={80} color={'red'}></FiShoppingCart>
            </div>
        )
          
    }
}

export default withRouter(LoginPage)