import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ columnId, columnName, tasks }) => { // Defining the Column component that accepts three props: columnId, columnName, and tasks

  
  
  return ( 
    
    
    // droppableId is a unique identifier for the droppable area
    <Droppable droppableId={columnId}>
      
   
      {(provided) => (
        
        //  div that represents the column where tasks will be dropped
        <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
          
          {/* Rendering the column's name at the top */}
          <h2>{columnName}</h2>
          
          {/* Iterating over the tasks array and rendering each Task component */}
          {tasks.map((task, index) => (
            
     
            // Passing task and its index to the Task component
            <Task key={task.id} task={task} index={index} />
          ))}
          
          {/* provided.placeholder is used to maintain the space when dragging tasks */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
