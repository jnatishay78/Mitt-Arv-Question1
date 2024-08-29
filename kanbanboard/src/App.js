import React from 'react';
import { Container, TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './features/tasks/tasksSlice';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h1 className="heading">Atishay's Kanban Board</h1>
      </header>
      <Container>
        <TextField className='text'
          label="Search tasks here..."
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          sx={{
            // Style for the label
            '& .MuiInputLabel-root': {
              color: 'lightblue', // Change to your preferred label color
            },
            // Style for the input text
            '& .MuiOutlinedInput-root': {
              '& input': {
                color: 'white', // Change to your preferred text color
              },
              '& fieldset': {
                borderColor: '#EEF7FF', // Default border color
              },
              '&:hover fieldset': {
                borderColor: '#FEFAF6', // Border color on hover
              },
              '&.Mui-focused fieldset': {
      
                borderColor: '#FCF8F3', // Border color when focused
              },
            },
          }} />
        <Board />
        <Fab color="primary" aria-label="add" onClick={handleOpen} className="fab"
          sx={{
            width: 116,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#9DBDFF', // Custom background color
            color: 'white', // Custom text color
            '&:hover': {
              backgroundColor: '#7695FF', // Hover background color
            },
            '& .MuiFab-label': {
              // Center text vertically and horizontally
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}>
          <AddIcon /><h5>Add Task</h5>
        </Fab>
        <TaskForm open={open} handleClose={handleClose} />
        {/* <!-- <img src="" alt=""> --> */}
      </Container>
      <footer className="footer">
        <Container>
          <p>&copy; 2024 Atishay's Kanban Board. All rights reserved.</p>
          <p>Contact us at: <a href="mailto:support@kanbanboard.com">support@kanbanboard.com</a></p>
        </Container>
      </footer>
    </>
  );
}

export default App;