import { useState, useEffect } from 'react'
import { getTodos, addTodo } from './services/todo-service'
import { getImage } from './services/image-service'
import './App.css';

const TodoList = ({ todos }) => {
  return (
    <ol className="todo-list">
      {todos.map((todo) => <li key={todo.todo}>{todo.todo}</li>)}
    </ol>
  )
}

const TodoForm = ({ addTodo }) => {
  return (
    <div className="todo-input">
      <form onSubmit={addTodo}>
        <input id="new_todo" type="text" placeholder="Type in your todo"/>
        <button type="submit" >Add ToDo</button>
        <h1>Wow, Greetings from another branch!</h1>
      </form>
    </div>
  )
}

const App = () => {

  const [todos, setTodos] = useState([])
  const [todoError, setTodoError] = useState('')
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getInitialTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    
    const getDailyImage = async () => {
      const img = await getImage()
      setImage(img)
    }
    getInitialTodos()
    getDailyImage()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTodoError('')
    const newTodo = event.target.new_todo.value
    event.target.new_todo.value = ''
    try {
      const added = await addTodo(newTodo)
      setTodos(todos => [...todos, added])
    } catch (error) {
      setTodoError(`Oops! ${error.response.data}`)
    }
  }

  return (
    <div className="main">
      <div className="main-image" id="image">
        <img src={image} alt="some random content"/>
      </div>
        <TodoForm addTodo={handleSubmit}/>
        <p className="new-todo-error" id="new_todo_error">{todoError}</p>
        <TodoList todos={todos}/>
    </div>
  )
}

export default App;
