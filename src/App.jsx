import { useEffect, useState } from "react"

import Header from "./Components/Header"
import Stats from "./Components/Stats"
import TodoForm from "./Components/TodoForm"
import FilterBar from "./Components/FilterBar"
import TodoList from "./Components/TodoList"

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

      <FilterBar
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