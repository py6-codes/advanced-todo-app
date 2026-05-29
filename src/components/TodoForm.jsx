import { useEffect, useState } from "react"

function TodoForm({

  todos,
  setTodos,
  editTodo,
  setEditTodo

}) {

  const [title, setTitle] = useState("")
  const [description, setDescription] =
    useState("")
  const [priority, setPriority] =
    useState("medium")

  useEffect(() => {

    if (editTodo) {

      setTitle(editTodo.title)
      setDescription(editTodo.description)
      setPriority(editTodo.priority)

    }

  }, [editTodo])

  function handleAddOrEditTodo() {

    if (title.trim() === "") {
      return
    }

    if (editTodo) {

      const updatedTodos = todos.map(
        (todo) => {

          if (todo.id === editTodo.id) {

            return {
              ...todo,
              title: title,
              description: description,
              priority: priority
            }

          }

          return todo
        }
      )

      setTodos(updatedTodos)

      setEditTodo(null)

    }

    else {

      const newTodo = {
        id: String(Date.now()),
        title: title,
        description: description,
        status: "pending",
        priority: priority,
        createdAt:
          new Date().toLocaleString()
      }

      setTodos([...todos, newTodo])

    }

    setTitle("")
    setDescription("")
    setPriority("medium")
  }

  function handleClearTodos() {

    const confirmClear = window.confirm(
      "Are you sure you want to clear all todos?"
    )

    if (!confirmClear) {
      return
    }

    setTodos([])
  }

  return (
    <div className="todo-form">

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      ></textarea>

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >

        <option value="low">
          Low
        </option>

        <option value="medium">
          Medium
        </option>

        <option value="high">
          High
        </option>

      </select>

      <div className="form-buttons">

        <button
          onClick={handleAddOrEditTodo}
          disabled={title.trim() === ""}
        >

          {
            editTodo
              ? "Update Todo"
              : "Add Todo"
          }

        </button>

        <button
          className="clear-btn"
          onClick={handleClearTodos}
        >
          Clear Todos
        </button>

      </div>

    </div>
  )
}

export default TodoForm