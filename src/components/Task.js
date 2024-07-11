import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, Typography, Box } from '@mui/material';
import { Delete, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
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

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTask(task.id)} style={{ color: '#81667A' }}>
          <Delete />
        </IconButton>
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
    </ListItem>
  );
};

export default Task;
