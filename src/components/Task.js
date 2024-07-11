import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, Typography } from '@mui/material';
import { Delete, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTask(task.id)} style={{ color: '#8C8A93' }}>
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
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              Due: {task.dueDate}
            </Typography>
            <Typography component="span" variant="body2" color="textSecondary">
              Priority: {task.priority}
            </Typography>
          </>
        }
        className={task.completed ? 'completed' : ''}
      />
    </ListItem>
  );
};

export default Task;
