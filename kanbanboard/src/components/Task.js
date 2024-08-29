import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {/* Rendering the Draggable component, which makes the task draggable. 
        'draggableId' is a unique identifier for the task, and 'index' determines its position in the list. */}
      
      {(provided) => (
         // The Draggable component uses a render prop pattern, providing a function with the 'provided' object that contains drag-and-drop-related props.
        <div
          className="task"           // Applying a class name to the task's container for styling purposes.
          ref={provided.innerRef}            // Setting the 'ref' attribute with the 'provided.innerRef' to ensure that the DOM element is properly tracked by the drag-and-drop library.
          {...provided.draggableProps}   // Spreading 'provided.draggableProps' into the div to apply the necessary drag-and-drop properties to the entire task element.
          {...provided.dragHandleProps}  // Spreading 'provided.dragHandleProps' into the div to make the entire div a handle for dragging.
        >
          <h3>{task.title}</h3>             {/* Displaying the task's title inside an <h3> element. */}
          <p>{task.description.length > 50 ? `${task.description.substring(0, 50)}...` : task.description}</p> {/* Displaying the task's description inside a <p> element. If the description is longer than 50 characters, it truncates the description and adds '...' to indicate more text. */}
        </div>
      )}
    </Draggable>
  );
  // Closing the Draggable component and the Task component's return statement.
};

export default Task;
