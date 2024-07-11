import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#92B4A7', // Adjusted color
    },
    secondary: {
      main: '#81667A', // Adjusted color
    },
    background: {
      default: '#D1F0B1', // Adjusted color
      paper: '#D1F0B1',   // Adjusted color
    },
    text: {
      primary: '#8C8A93', // Adjusted color
      secondary: '#B6CB9E', // Adjusted color
    },
  },
});

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    console.log("Adding task:", task);
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" className="app-container">
        <Typography variant="h4" component="h1" gutterBottom>
          Task Manager
        </Typography>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
