function Stats({ todos }) {

  const completedTodos = todos.filter(
    (todo) => todo.status === "completed"
  )

  const pendingTodos = todos.filter(
    (todo) => todo.status === "pending"
  )

  return (
    <div className="stats">

      <div className="stat-box">

        <h3>Total Todos</h3>

        <p>{todos.length}</p>

      </div>

      <div className="stat-box">

        <h3>Completed Todos</h3>

        <p>{completedTodos.length}</p>

      </div>

      <div className="stat-box">

        <h3>Pending Todos</h3>

        <p>{pendingTodos.length}</p>

      </div>

    </div>
  )
}

export default Stats