function TodoList({

  todos,
  setTodos,
  setEditTodo

}) {

  function handleDelete(id) {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this todo?"
      )

    if (!confirmDelete) {
      return
    }

    const updatedTodos = todos.filter(
      (todo) => todo.id !== id
    )

    setTodos(updatedTodos)
  }

  function toggleStatus(id) {

    const updatedTodos = todos.map(
      (todo) => {

        if (todo.id === id) {

          return {
            ...todo,
            status:
              todo.status === "pending"
                ? "completed"
                : "pending"
          }

        }

        return todo
      }
    )

    setTodos(updatedTodos)
  }

  return (
    <div>

      {
        todos.map((todo) => (

          <div
            key={todo.id}
            className="todo-card"
          >

            <h2>
              {todo.title}
            </h2>

            <p>
              {todo.description}
            </p>

            <p>
              Status: {todo.status}
            </p>

            <p>
              Priority: {todo.priority}
            </p>

            <p>
              {todo.createdAt}
            </p>

            <div className="todo-buttons">

              <button
                className="status-btn"
                onClick={() =>
                  toggleStatus(todo.id)
                }
              >
                Toggle Status
              </button>

              <button
                onClick={() =>
                  setEditTodo(todo)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(todo.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>
  )
}

export default TodoList