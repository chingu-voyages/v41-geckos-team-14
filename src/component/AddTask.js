import React from 'react'

const AddTask = ({newTask, setNewTask, addTask}) => {
  return (
    <div>
          
          <>
          {/* Add Task*/}

            <div className="row">
            <div className="col">
                 <input  
                 value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                 className="form-control form-control-lg"/>
            </div>
            <div className="col-auto">
                <button 
                onClick={addTask}
                className="btn btn-success btn-lg">Add Task</button>
            </div>
        </div>
        <br />

          </>

    </div>
  )
}

export default AddTask