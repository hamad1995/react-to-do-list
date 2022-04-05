import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks';

import './styles/index.css'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

 useEffect (()=>{
 const getTasks = async ()=>{
   const tasksFromServer = await fetchTasks()
   setTasks(tasksFromServer)
 }

 getTasks()

  },[])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
return data
  }
//add task
const addTask =async (task) =>{
 const res =await fetch('http://localhost:5000/tasks',{
   method:'POST',
   headers:{
     'content-type':'application/json',

   },
   body:JSON.stringify(task)
 })
 const data= await res.json()
 setTasks([...tasks, data])
 
  // const id =Math.floor(Math.random()*1000) +1
  // const newTask= {id, ...task}
  // setTasks([...tasks, newTask])
}

const deleteTask =async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
setTasks(tasks.filter(task =>(task.id !== id)))
}

const toggleReminder=(id) =>{
setTasks(tasks.map((task)=>
task.id ===id ?{...task,reminder :!task.reminder}:task))
}
  return (
    <div className={'container'}>
      <Header onAdd={()=> setShowAddTask(!showAddTask)}showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
