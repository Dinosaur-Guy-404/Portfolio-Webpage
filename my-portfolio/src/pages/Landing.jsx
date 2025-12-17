import { Box, Typography } from "@mui/material";

export default function Landing() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I’m Chris Wang
      </Typography>
      <Typography variant="h6">
        React Developer | UI-focused | Problem Solver
      </Typography>
			<Typography variant="body1" sx={{ mt: 2 }}>
				I’m a React developer passionate about building intuitive user interfaces 
				and solving complex problems. I enjoy creating projects that make an impact 
				and learning new technologies along the way.
			</Typography>				
    </Box>
  );
}
