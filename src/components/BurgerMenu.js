import React, { useState } from "react";
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
  zIndex: 1000,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: "2rem", // Increase icon size
}));

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: "#B6CB9E", // Changed background color
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  marginTop: theme.spacing(1),
  width: 250, // Increased width
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2), // Increase padding for larger menu items
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "1.2rem", // Increase font size
  },
}));

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "About", "Contact", "Projects"];

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
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <StyledList>
          {menuItems.map((text) => (
            <StyledListItem button key={text}>
              <StyledListItemText primary={text} />
            </StyledListItem>
          ))}
        </StyledList>
      </Collapse>
    </MenuContainer>
  );
}

export default BurgerMenu;
