import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Box>
      <Typography variant="h6" color={"#81667A"} gutterBottom>
        Pomodoro Timer
      </Typography>
      <Typography variant="body1" color={"#81667A"} gutterBottom>
        {formatTime(timer)}
      </Typography>
      <Button variant="contained" color={"secondary"} onClick={toggleTimer}>
        {isActive ? "Pause" : "Start"}
      </Button>
    </Box>
  );
};

export default PomodoroTimer;
