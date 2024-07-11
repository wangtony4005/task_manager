import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  zIndex: 1000,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: "2rem",
}));

const MenuContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: theme.spacing(4),
}));

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: "#B6CB9E",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  width: 250,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "1.2rem",
  },
}));

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Timer", path: "/timer" },
  ];

  return (
    <MenuContainer>
      <StyledIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <MenuIcon fontSize="inherit" />
      </StyledIconButton>
      <MenuContent>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <StyledList>
            {menuItems.map((item) => (
              <StyledListItem
                button
                key={item.text}
                to={item.path}
                onClick={toggleMenu}
              >
                <StyledListItemText primary={item.text} />
              </StyledListItem>
            ))}
          </StyledList>
        </Collapse>
      </MenuContent>
    </MenuContainer>
  );
}

export default BurgerMenu;
