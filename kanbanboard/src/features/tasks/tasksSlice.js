import { createSlice } from '@reduxjs/toolkit';
// Importing the `createSlice` function from Redux Toolkit, which is used to create a slice of the Redux store.

const initialTasks = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'inprogress' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'peerreview' },
  { id: '4', title: 'Task 4', description: 'Description 4', status: 'done' },
];
// Defining the initial state of tasks as an array of task objects. Each task has an `id`, `title`, `description`, and `status`.

const tasksSlice = createSlice({
  name: 'tasks',
  // Naming the slice 'tasks', which will be used in action types and state.
  
  initialState: {
    tasks: initialTasks,
    // Setting the initial state with the predefined `initialTasks`.
    
    searchQuery: '',
    // Adding an initial search query state set to an empty string, which will be used for filtering tasks.
  },
  
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      // `addTask` reducer to add a new task to the `tasks` array. The task data is passed in `action.payload`.
    },
    
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      // Destructuring `id` and `status` from `action.payload` to identify which task to update.
      
      const task = state.tasks.find(task => task.id === id);
      // Finding the task in the `tasks` array that matches the provided `id`.
      
      if (task) {
        task.status = status;
        // If the task is found, update its `status` to the new value provided.
      }
    },
    
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      // `setSearchQuery` reducer to update the `searchQuery` state with the new query string from `action.payload`.
    },
  },
});
// Creating a slice with `createSlice`, which automatically generates action creators and action types based on the reducers defined.

export const { addTask, updateTaskStatus, setSearchQuery } = tasksSlice.actions;
// Exporting the action creators for `addTask`, `updateTaskStatus`, and `setSearchQuery` for use in components.

export default tasksSlice.reducer;
// Exporting the reducer function generated by `createSlice` to be used in the Redux store.