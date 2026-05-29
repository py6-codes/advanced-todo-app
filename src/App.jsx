import { useEffect, useState } from "react"

import Header from "./components/Header"
import Stats from "./components/Stats"
import TodoForm from "./components/TodoForm"
import Filterbar from "./components/Filterbar"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(() => {

    const savedTodos =
      localStorage.getItem("todos")

    return savedTodos
      ? JSON.parse(savedTodos)
      : []

  })

  const [filterStatus, setFilterStatus] =
    useState("all")

  const [editTodo, setEditTodo] =
    useState(null)

  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    )

  }, [todos])

  let filteredTodos = todos

  if (filterStatus === "completed") {

    filteredTodos = todos.filter(
      (todo) => todo.status === "completed"
    )

  }

  else if (filterStatus === "pending") {

    filteredTodos = todos.filter(
      (todo) => todo.status === "pending"
    )

  }

  return (
    <div className="app-container">

      <Header />

      <Stats todos={todos} />

      <TodoForm
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <Filterbar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />

    </div>
  )
}

export default App