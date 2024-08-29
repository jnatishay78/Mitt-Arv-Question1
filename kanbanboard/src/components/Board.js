import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { updateTaskStatus } from '../features/tasks/tasksSlice';

const columns = { // An object that maps column IDs to their display names.
  todo: 'To Do', // 'todo' column corresponds to 'To Do' tasks.
  inprogress: 'In Progress', // 'inprogress' column corresponds to 'In Progress' tasks.
  peerreview: 'Peer Review', // 'peerreview' column corresponds to 'Peer Review' tasks.
  done: 'Done', // 'done' column corresponds to 'Done' tasks.
};

const Board = () => { // Defining the Board component that represents the entire Kanban board.
  const tasks = useSelector(state => state.tasks.tasks); // Selecting all tasks from the Redux store using useSelector.
  const searchQuery = useSelector(state => state.tasks.searchQuery); // Selecting the search query from the Redux store using useSelector.
  const dispatch = useDispatch(); // Getting the dispatch function from Redux to send actions to the store.
  const onDragEnd = (result) => { // Function called when a drag-and-drop action ends.
    if (!result.destination) return; // If there is no valid drop destination, exit the function.
    dispatch(updateTaskStatus({ id: result.draggableId, status: result.destination.droppableId })); // Dispatching the updateTaskStatus action to update the status of the task that was dragged.
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Filtering the tasks based on the search query


  return (
    <DragDropContext onDragEnd={onDragEnd}>{/* Wrapping the board with DragDropContext to enable drag-and-drop functionality. */}
      <div className="board"> {/* The container div for the entire Kanban board */}
        {Object.entries(columns).map(([columnId, columnName]) => (
          <Column
            key={columnId} // Using columnId as the unique key for each Column component.
            columnId={columnId} // Passing the columnId as a prop to Column component.
            columnName={columnName} // Passing the columnName as a prop to Column component.
            tasks={filteredTasks.filter(task => task.status === columnId)} // Passing the filtered tasks for this column based on the status.
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;