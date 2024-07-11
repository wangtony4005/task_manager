import React from "react";
import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box mt={16} textAlign="center">
      <Link
        href="https://github.com/wangtony4005/task_manager"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#81667A",
        }}
      >
        <GitHubIcon fontSize="small" style={{ marginRight: "0.5rem" }} />
        GitHub Repo
      </Link>
    </Box>
  );
};

export default Footer;
