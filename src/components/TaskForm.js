import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ id: Date.now(), name: taskName, completed: false, dueDate, priority });
      setTaskName('');
      setDueDate('');
      setPriority('');
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
      <TextField
        variant="outlined"
        margin="normal"
        type="date"
        fullWidth
        label="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputProps={{
          style: {
            color: '#81667A',
            backgroundColor: '  #FFFFFF',  
          },
        }}
        InputLabelProps={{
            shrink:true,
          style: { color: '#5D536B' },
        }}
        sx={{ ml: 1 }}
      />
      <TextField
        select
        variant="outlined"
        margin="normal"
        fullWidth
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        InputProps={{
          style: {
            color: '#81667A',
            backgroundColor: '  #FFFFFF',  
          },
        }}
        InputLabelProps={{
          style: { color: '#5D536B' },
        }}
        sx={{ ml: 1 }}
      >
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
