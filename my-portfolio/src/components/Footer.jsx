import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={24}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href="https://github.com/Dinosaur-Guy-404"
          target="_blank"
        />
        <BottomNavigationAction
          label="Email"
          icon={<EmailIcon />}
          href="mailto:cwang3331@gmail.com"
        />
      </BottomNavigation>
    </Paper>
  );
}
