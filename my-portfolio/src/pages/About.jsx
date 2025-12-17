import { Box, Typography, Stack, Chip, Avatar, Link } from "@mui/material";
import Photo from ".././assets/photo.jpg";

export default function About() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      {/* Profile Avatar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Avatar
          alt="Chris Wang"
          src={Photo}
          sx={{ width: 120, height: 120 }}
        />
      </Box>

      {/* Intro */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Hi! I’m Chris Wang, currently studying Computer Science at UNSW. I’m
        passionate about building modern, user-friendly webpages and solving
        complex problems. I enjoy learning new technologies and creating
        projects that make an impact.
      </Typography>

      {/* Skills / Tech Stack */}
      <Typography variant="h6" gutterBottom>
        Skills & Technologies
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 3 }}>
        <Chip label="React" color="primary"/>
        <Chip label="JavaScript" color="secondary" />
        <Chip label="HTML"/>
        <Chip label="CSS"/>
        <Chip label="MUI" color="info"/>
        <Chip label="Vite"/>
        <Chip label="SQL" color="secondary"/>
        <Chip label="C" color="primary"/>
        <Chip label="Git Tools" color="info"/>
        <Chip label="Python" color="primary"/>
        <Chip label="Shell" color="primary"/>
      </Stack>

      <Typography variant="h6" gutterBottom>
        Projects & Highlights
      </Typography>
      <Box component="ul" sx={{ pl: 2, mb: 3 }}>
        <li>Personal Portfolio Website built with React and MUI</li>
        <li>Game project demonstrating React state management</li>
        <li>Contributed to a collaborative web app using Git and GitHub</li>
      </Box>
    </Box>
  );
}
