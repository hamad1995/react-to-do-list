import React from 'react'

const Button = ({text, color,onClick}) => {
   
  return (
<button style={{backgroundColor: color}} className={'btn'} onClick={onClick}>{text}</button>
  ) 

}

export default Button