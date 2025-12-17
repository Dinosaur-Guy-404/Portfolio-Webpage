import { AppBar, Toolbar, Button, Switch, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ mode, toggleMode }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/projects">
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