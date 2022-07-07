import { useState, useEffect } from 'react'
import { getTodos, addTodo, setAsComplete } from './services/todo-service'
import { getImage } from './services/image-service'
import './App.css';

const TodoList = ({ todos, btnFunction }) => {
  return (
    <div className='todo-list'>
      {todos.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1
        } else if (!a.completed && b.completed) {
          return -1
        }
        return 0
      }).map((todo, idx) => 
        <div 
          key={todo.id} 
          className={todo.completed ? 'todo todo-complete' : 'todo'}
        > 
          <p className='todo-text'>{idx + 1}: {todo.todo}</p>
          {!todo.completed ? 
          <button className='todo-button' onClick={() => btnFunction(todo)}>
            Mark as complete
          </button>
          : null }
        </div>
      )}
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  return (
    <div className="todo-input">
      <form onSubmit={addTodo}>
        <input id="new_todo" type="text" placeholder="Type in your todo"/>
        <button type="submit" >Add ToDo</button>
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

  const handleSetAsComplete = async (todo) => {
    await setAsComplete(todo)
    setTodos(todos => todos.map(t => {
      if(t.id === todo.id) {
        t.completed = true
      }
      return t
      })
    )
  }

  return (
    <div className="main">
      <div className="main-image" id="image">
        <img className="image" src={image} alt="some random content"/>
      </div>
        <TodoForm addTodo={handleSubmit}/>
        <p className="new-todo-error" id="new_todo_error">{todoError}</p>
        <TodoList todos={todos} btnFunction={handleSetAsComplete}/>
    </div>
  )
}

export default App;
