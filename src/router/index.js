import React,{Component} from 'react'
import {HashRouter as Router ,Route , Switch} from 'react-router-dom'
import Home from '../pages/home'
import HomePage from '../pages/homeIndex'
import Login from './../App'

export default class IRouter extends Component{
    render(){
        return(
            <Router>
                
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' render={()=>{
                        return(
                            <Home>
                                <Switch>
                                    <Route path='/home' component={HomePage}></Route>
                                </Switch>
                            </Home>
                        )
                    }}></Route>

            </Router>
        );
    }
}