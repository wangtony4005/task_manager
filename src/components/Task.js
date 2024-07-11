import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, MenuItem } from '@mui/material';
import { Delete, CheckBox, CheckBoxOutlineBlank, Edit } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, deleteTask, toggleTaskCompletion, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Low':
        return 'priority-low';
      case 'Medium':
        return 'priority-medium';
      case 'High':
        return 'priority-high';
      default:
        return '';
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSubmit = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        <Box>
          <IconButton edge="end" onClick={() => setIsEditing(true)} style={{ color: '#81667A' }}>
            <Edit />
          </IconButton>
          <IconButton edge="end" onClick={() => deleteTask(task.id)} style={{ color: '#81667A' }}>
            <Delete />
          </IconButton>
        </Box>
      }
      style={{ borderBottom: '1px solid #81667A' }}
    >
      <Checkbox
        icon={<CheckBoxOutlineBlank style={{ color: '#8C8A93' }} />}
        checkedIcon={<CheckBox style={{ color: '#92B4A7' }} />}
        checked={task.completed}
        onClick={() => toggleTaskCompletion(task.id)}
      />
      <ListItemText
        primary={task.name}
        secondary={
          <Box className={`task-secondary ${getPriorityClass(task.priority)}`}>
            <Typography component="span" variant="body2" color="textPrimary">
              Due: {task.dueDate}
            </Typography>
            <Typography component="span" variant="body2" color="textSecondary" className="priority">
              Priority: {task.priority}
            </Typography>
          </Box>
        }
        className={task.completed ? 'completed' : ''}
      />

      <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make changes to your task and save.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            name="name"
            value={editedTask.name}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleEditChange}
          />
          <TextField
            select
            margin="dense"
            label="Priority"
            fullWidth
            name="priority"
            value={editedTask.priority}
            onChange={handleEditChange}
          >
            <MenuItem value="Low" style={{ color: 'green' }}>Low</MenuItem>
            <MenuItem value="Medium" style={{ color: 'orange' }}>Medium</MenuItem>
            <MenuItem value="High" style={{ color: 'red' }}>High</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditing(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};

export default Task;
