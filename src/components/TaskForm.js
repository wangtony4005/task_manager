import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    } else {
      console.log("Task name is empty, not adding task.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" mb={2}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Add a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        InputProps={{
          style: {
            color: '#81667A',
            backgroundColor: '  #FFFFFF',  
          },
        }}
        InputLabelProps={{
          style: { color: '#5D536B' },
        }}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
