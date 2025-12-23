import { AppBar, Toolbar, Button, Switch, Box, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ mode, toggleMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" onClick={handleClick} component={Link} to="/projects">
          Projects
        </Button>
				<Box sx={{ flexGrow: 1 }} />
        <Switch
          checked={mode === "dark"}
          onChange={toggleMode}
          slotProps={{ "aria-label": "dark mode toggle" }}
        />
      </Toolbar>
    </AppBar>
	)
}