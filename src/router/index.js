import React,{Component} from 'react'
import {HashRouter as Router ,Route , Switch} from 'react-router-dom'
import FixEquipment from '../pages/equipment_fix'
import Home from '../pages/home'
import HomePage from '../pages/homeIndex'
import MapToielt from '../pages/mapToielt/index'
import Remind from '../pages/remind'
import Login from '../pages/login'
import SourceApply from '../pages/source_apply'
import Notice from '../pages/notice'
import PrivateRoute from '../components/privateRoute/index'
import User from '../pages/user'
import AlertInfo from '../pages/alert-information/index'
import Power from '../pages/power/index'
import StuffRelation from '../pages/stuff-relation'
import RepairStatistic from '../pages/reapair-statistic'
import CheckStastic from '../pages/check-statistic'
import EnviromentStatistic from '../pages/enviroment-statistic'
import MaterialStatistic from '../pages/material-statistic'

export default class IRouter extends Component{
    render(){
        return(
            <Router>
              <Route path='/login' component={Login}></Route>
              <PrivateRoute>
                <Route path='/home' render={()=>{
                    return(
                        <Home>
                            <Switch>
                                <Route path='/home/homepage' component={HomePage}></Route>
                                <Route path='/home/map' component={MapToielt}></Route>
                                <Route path='/home/remind'component={Remind}></Route>
                                <Route path='/home/equipmentfix' component={FixEquipment}></Route>
                                <Route path='/home/sourceapply' component={SourceApply}></Route>
                                <Route path='/home/notice' component={Notice}></Route>
                                <Route path='/home/user' component={User}></Route>
                                <Route path='/home/alertinfo' component={AlertInfo}></Route>
                                <Route path='/home/power' component={Power}></Route>
                                <Route path='/home/stuffrelation' component={StuffRelation}></Route>
                                <Route path='/home/repairStatistic' component={RepairStatistic}></Route>
                                <Route path='/home/checkStatistic' component={CheckStastic}></Route>
                                <Route path='/home/enviromentStatistic' component={EnviromentStatistic}></Route>
                                <Route path='/home/materialStatistic' component={MaterialStatistic}></Route>
                            </Switch>
                        </Home>
                    )
                }}></Route>
              </PrivateRoute>
            </Router>
        );
    }
}