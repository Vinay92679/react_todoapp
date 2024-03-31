import './App.css'
import TodoProvider from './Context/TodoProvider.js'
import TaskInput from './components/TaskInput.js'
import TaskList from './components/TaskList.js'

function App() {
 
  return (
    <>
    <TodoProvider>
      <div className='App'>
         <TaskInput/>
         <TaskList/>
      </div>
    </TodoProvider>
    </>
  )
}

export default App
