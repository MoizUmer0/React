
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  

  return (
 <>
    <h1 className='bg-gray-700 text-white text-center p-4 text-3xl'>Hello world</h1>
    <AddTodo/>
    <Todos/>
 </>
  )
}

export default App
