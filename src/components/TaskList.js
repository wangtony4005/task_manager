import React from 'react';
import Task from './Task';
import { List } from '@mui/material';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, updateTask }) => {
  return (
    <List>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} updateTask={updateTask} />
      ))}
    </List>
  );
};

export default TaskList;
