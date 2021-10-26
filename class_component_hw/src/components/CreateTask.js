import React from 'react';

function CreateTask(props){
    return (        
      <div>
          <h1>What need to be done</h1>
        <input value={props.value} onChange={props.onChange} />
        <button onClick={props.addTask}>Add Task</button>
      </div>
      )
}

export default CreateTask;