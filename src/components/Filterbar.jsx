function Filterbar({

  filterStatus,
  setFilterStatus

}) {

  return (
    <div className="filter-bar">

      <button
        onClick={() => setFilterStatus("all")}
      >
        All
      </button>

      <button
        onClick={() => setFilterStatus("completed")}
      >
        Completed
      </button>

      <button
        onClick={() => setFilterStatus("pending")}
      >
        Pending
      </button>

    </div>
  )
}

export default Filterbar