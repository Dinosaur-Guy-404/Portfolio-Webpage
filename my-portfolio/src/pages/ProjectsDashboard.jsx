import { Box, Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import TicTacToe from "../assets/tictactoe_image.png";

export default function ProjectsDashboard() {
	return (
	<Box ml={4}>
		<Card sx={{ width: 150 }}>
			<CardActionArea component={Link} to="/projects/tictactoe">
				<CardMedia
					component="img"
					height="150"
					image={TicTacToe}	
					alt="Tic Tac Toe"
				/>
			</CardActionArea>
					<Typography
						variant="subtitle1"
						align="center"
						sx={{ mt: 1, fontWeight: 500 }}
					>
						Tic Tac Toe
					</Typography>
		</Card>
	</Box>
	)
}