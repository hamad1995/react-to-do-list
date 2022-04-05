import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAddTask}) => {
   
  return (
    <header className={'header'}>
            <h1>Task Tracker</h1>
            <Button color={showAddTask ?'red':'green'} text={showAddTask ? 'close':'add'}onClick={onAdd}/>
    </header>        
  )
}

export default Header