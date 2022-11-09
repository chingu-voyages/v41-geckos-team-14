
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTask from '../component/AddTask';
import UpdateTask from '../component/UpdateTask';
import DisplayTodo from '../component/DisplayTodo';

import React from 'react';
import "../TodoApp.css";

const TodoApp = () => {
    const [todo, setTodo] = useState([
       
      ]);
    
      // Temp state 
    
      const [newTask, setNewTask] = useState('')
      const [updateData, setUpdateData] = useState('')
    
      // add Task
    
      const addTask =() => {
        if (newTask) {
            let num = todo.length + 1;
            let newEntry = {id: num, title: newTask, status: false}
            setTodo([...todo, newEntry])
            setNewTask('')
        }
    
      }
    
      // Delete Task
    
      const deleteTask = (id) => {
          let newTasks = todo.filter((task) => task.id !== id)
            setTodo(newTasks)
      }
    
      // mark task as done or completed
    
      const markDone = (id)  => {
    
        let newTask = todo.map ((task) => {
            if (task.id === id) {
                return ({...task, status:  !task.status})
            }
            return task
        })
        setTodo(newTask)
      }
    
      // cancel update
    
      const cancelUpdate = () => {
    
        setUpdateData('')
      }
    
      // change task for update
    
      const changeTask = (e) => {
        let newEntry = {
          id: updateData.id,
          title: e.target.value,
          status: updateData.status ? true : false
        }

        setUpdateData(newEntry)
    
      }
    
      // update Task
    
      const updateTask = () => {
       
        let filterRecords = [...todo].filter((task) => task.id !== updateData.id)
        let updatedObject = [...filterRecords, updateData]
        setTodo(updatedObject)
        setUpdateData('')
    
    
      }
    
      return (
        <div className='TodoApp.css' >
    
        <br/> <br/>
        <h2>To-do App Dashboard</h2>
        <br/> <br/>
        {/* update Task*/}


        {updateData && updateData ? (

          <UpdateTask
          updateData={updateData}
          updateTask={updateTask}

          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
          />

        ) : (
          
            <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            />
        )}
        



          
        
    
        {/* Display Todo*/}
    
        {todo && todo.length ? '' : "No Tasks......"}
    
        <DisplayTodo 
           todo={todo}
          markDone={markDone}
      
          setUpdateData={setUpdateData}
         
          deleteTask={deleteTask}

        />
    
        </div>
      );
}

export default TodoApp