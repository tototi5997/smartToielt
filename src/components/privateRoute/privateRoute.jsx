import React from 'react'
import w from '../../models/root'
import {Route, Redirect} from 'react-router-dom'
import { observer } from 'mobx-react-lite'

// 接入w
const {user} = w
const PrivateRoute = ({children, ...rest}) => {
  return (
    <Route
    {...rest}
    render = {() => {
      const auth = user.userstate
      console.log(auth)
      if(auth === 'login'){
        return children
      }
      return <Redirect
      to={{
        pathname:'/login'
      }}
      />
    }}
    />
  )
}
export default observer(PrivateRoute)