import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTask(task.id)} style={{ color: '#989FCE' }}>
          <Delete />
        </IconButton>
      }
      style={{ borderBottom: '1px solid #5D536B' }}
    >
      <Checkbox
        icon={<CheckBoxOutlineBlank style={{ color: '#989FCE' }} />}
        checkedIcon={<CheckBox style={{ color: '#347FC4' }} />}
        checked={task.completed}
        onClick={() => toggleTaskCompletion(task.id)}
      />
      <ListItemText primary={task.name} className={task.completed ? 'completed' : ''} />
    </ListItem>
  );
};

export default Task;
