import React,{Component} from 'react'
import {HashRouter as Router ,Route , Switch,Redirect} from 'react-router-dom'
import Home from '../pages/home'
import HomePage from '../pages/homeIndex'
import MapToielt from '../pages/mapToielt'
import Remind from '../pages/remind'
import Login from './../App'

export default class IRouter extends Component{
    render(){
        return(
            <Router>
                
                    <Route path='/login' component={Login}></Route>
                    <Redirect from='/' to='/login'></Redirect>
                    <Route path='/home' render={()=>{
                        return(
                            <Home>
                                <Switch>
                                    <Route path='/home/homepage' component={HomePage}></Route>
                                    <Route path='/home/map' component={MapToielt}></Route>
                                    <Route path='/home/remind'component={Remind}></Route>
                                </Switch>
                            </Home>
                        )
                    }}></Route>

            </Router>
        );
    }
}