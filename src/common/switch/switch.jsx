import React,{useState} from 'react'
import './index.less'

const Switch  = ({left,info}) => {
  let [state,setState] = useState(true)
  const isChecked =() => {
    if(info === 0){state = false}
    return state
  }

  return (
    <input 
    type='checkbox' 
    className='switch' 
    style={{float:'right',marginRight:left,marginTop:20}}
    onChange={()=>{setState(!state)}}
    checked={isChecked()}
    />
  )
}
export default Switch