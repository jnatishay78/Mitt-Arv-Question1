import React, { useState } from 'react';
// Import React and useState hook from the React library.

import { useDispatch } from 'react-redux';
// Import useDispatch hook from react-redux to dispatch actions to the Redux store.

import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
// Import various components from @mui/material for the dialog UI: Dialog, DialogActions, DialogContent, DialogTitle, TextField, and Button.

import { addTask } from '../features/tasks/tasksSlice';
// Import the addTask action from the tasksSlice file, where Redux state and actions related to tasks are managed.

const TaskForm = ({ open, handleClose }) => {
// Define the TaskForm functional component that takes 'open' and 'handleClose' as props.

  const [title, setTitle] = useState('');
  // Declare a state variable 'title' initialized as an empty string and 'setTitle' as the function to update it.

  const [description, setDescription] = useState('');
  // Declare a state variable 'description' initialized as an empty string and 'setDescription' as the function to update it.

  const dispatch = useDispatch();
  // Initialize dispatch using useDispatch hook to enable dispatching actions to the Redux store.

  const handleSubmit = () => {
    // Define a function 'handleSubmit' to handle the submission of the form.

    const newTask = {
      id: Date.now().toString(),
      // Create a unique ID for the new task using the current timestamp.

      title,
      // Assign the 'title' state to the title property of the new task.

      description,
      // Assign the 'description' state to the description property of the new task.

      status: 'todo',
      // Set the initial status of the task to 'todo'.
    };

    dispatch(addTask(newTask));
    // Dispatch the addTask action with the newTask object as a payload to update the Redux store.

    setTitle('');
    // Reset the 'title' state to an empty string after submission.

    setDescription('');
    // Reset the 'description' state to an empty string after submission.

    handleClose();
    // Call the handleClose function to close the dialog after the task is added.
  };

  return (
    // Return the JSX for rendering the TaskForm component.

    <Dialog open={open} onClose={handleClose}>
      {/* Render a Dialog component with the 'open' prop controlling its visibility and 'onClose' prop handling the close event. */}

      <DialogTitle>Add New Task</DialogTitle>
      {/* Render the dialog title with the text 'Add New Task'. */}

      <DialogContent>

        <TextField 
          autoFocus
          // Automatically focus on this field when the dialog opens.

          margin="dense"
          // Add a dense margin to reduce the vertical spacing.

          label="Task Title"
          // Set the label of the text field to 'Task Title'.

          type="text"
          // Define the input type as text.

          fullWidth
          // Make the text field take up the full width of the container.

          value={title}
          // Bind the value of the text field to the 'title' state.

          onChange={(e) => setTitle(e.target.value)}
          // Update the 'title' state whenever the value of the text field changes.
        />

        <TextField 
          margin="dense"
          // Add a dense margin to reduce the vertical spacing.

          label="Task Description"
          // Set the label of the text field to 'Task Description'.

          type="text"
          // Define the input type as text.

          fullWidth
          // Make the text field take up the full width of the container.

          value={description}
          // Bind the value of the text field to the 'description' state.

          onChange={(e) => setDescription(e.target.value)}
          // Update the 'description' state whenever the value of the text field changes.
        />
      </DialogContent>
    

      <DialogActions>
       
        <Button onClick={handleClose}>Cancel</Button>
        {/* Render a 'Cancel' button that calls handleClose to close the dialog without adding a task. */}

        <Button onClick={handleSubmit}>Add Task</Button>
        {/* Render an 'Add Task' button that calls handleSubmit to add the new task and close the dialog. */}
      </DialogActions>
    
    </Dialog>
  
  );
};

export default TaskForm;
