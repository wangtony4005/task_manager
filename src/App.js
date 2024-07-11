import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Calendar from "react-calendar";
import {
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  MenuItem,
  TextField,
} from "@mui/material";
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";
import "./App.css";
import "react-calendar/dist/Calendar.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#92B4A7",
    },
    secondary: {
      main: "#81667A",
    },
    background: {
      default: "#D1F0B1",
      paper: "#D1F0B1",
    },
    text: {
      primary: "#8C8A93",
      secondary: "#B6CB9E",
    },
  },
});

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, dueDate: new Date(task.dueDate).toISOString().split("T")[0] },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const sortTasks = (tasks, criteria) => {
    switch (criteria) {
      case 'date':
        return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      case 'priority':
        const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
        return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      case 'name':
        return tasks.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return tasks;
    }
  };

  const sortedTasks = sortTasks([...tasks], sortCriteria);

  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const adjustedDate = new Date(date);
      adjustedDate.setDate(adjustedDate.getDate() - 1);

      const dayTasks = tasks.filter((task) => {
        const taskDate = new Date(task.dueDate);
        return taskDate.toDateString() === adjustedDate.toDateString();
      });
      return (
        <ul>
          {dayTasks.map((task) => (
            <li
              key={task.id}
              style={{ color: task.completed ? "#5D536B" : "#000" }}
            >
              {task.name}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" className="app-container">
        <BurgerMenu />
        <Typography variant="h4" component="h1" gutterBottom>
          Task Manager
        </Typography>
        <Typography variant="body1" gutterBottom>
          {currentDateTime.toLocaleDateString()}{" "}
          {currentDateTime.toLocaleTimeString()}
        </Typography>
        <TaskForm addTask={addTask} />
        <Box mb={2}>
          <TextField
            select
            label="Sort by"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="priority">Priority</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </TextField>
        </Box>
        <Calendar tileContent={getTileContent} />
        <TaskList
          tasks={sortedTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
        />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
