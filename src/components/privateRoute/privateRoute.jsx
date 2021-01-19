import React from 'react'
import w from '../../models/root'
import {Route, Redirect} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cookie from 'react-cookies'

// 接入w
const {user} = w
const PrivateRoute = ({children, ...rest}) => {
  const cookieUser = cookie.load('user')
  return (
    <Route
    {...rest}
    render = {() => {
      const auth = user.userstate
      if(auth === 'login' || cookieUser != undefined){
        return children
      }
      else if (auth === 'logout' && cookieUser === undefined) {
        return (<Redirect
      to={{pathname: '/login'}}
      />)
      }
      return (<Redirect
      to={{
        pathname:'/login'
      }}
      />)
    }}
    />
  )
}
export default observer(PrivateRoute)