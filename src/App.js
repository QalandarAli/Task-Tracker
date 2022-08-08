import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowTask] = useState(false)

  const [tasks, setTasks] = useState([ 
    {
      id: 1,
      text: 'guitar',
      day: 'Aug 9th at 12pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'more guitar',
      day: 'Aug 10th at 12pm',
      reminder: true,
    },
    {
      id: 3,
      text: ' something else or guitar',
      day: 'Aug 11th at 12pm',
      reminder: false,
    }
  
   ])
  
   //Add Task
   const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

   }

   //Delete Task
   const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
   }

   //Toggle Reminder
   const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder } : task
      )
    )
   }

  return (
    <div className="container">
      <Header onAdd={() => setShowTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
     onDelete={deleteTask}  onToggle={toggleReminder} /> : 'All done, Well done!'}
    </div>
  );
}

export default App;
