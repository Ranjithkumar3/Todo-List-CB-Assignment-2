import React from 'react';

function ShowTask(props){
    return(
        <ul>
          {props.tasks.map(task => {
            return(
              <li key={task.id}>
                {task.value}
                <button onClick={() => props.onDeleteTask(task.id)}> X</button>
              </li>
            )
          })}
        </ul>
    );
}

export default ShowTask;