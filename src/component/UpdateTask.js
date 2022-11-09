import React from 'react'

const UpdateTask = ({updateData, updateTask, cancelUpdate, changeTask}) => {
  return (
    <div>

        
<>
            <div className='row'>
                <div className='col'>
                <input  className="form-control form-control-lg"
                  value={updateData && updateData.title}
                  onChange={(e) => changeTask(e)}
                />
                </div>

                <div className="col-auto">
                <button 
                onClick={updateTask}
                className="btn btn-success btn-lg mr-20">Update</button>
                <button 
                onClick={cancelUpdate}
                className="btn btn-warning btn-lg">Cancel</button>

            </div>


        </div>
        <br/>

            </>       
    </div>
  )
}

export default UpdateTask