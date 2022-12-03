import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	styled,
	Typography,
} from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";

const MainPorto = styled(Box)(({ theme }) => ({
	padding: "50px",
}));

const Portofolio = () => {
	return (
		<MainPorto>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Portofolio
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Best Portofolio Me
			</Typography>

			<Box
				display="flex"
				flexDirection={"row"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				gap={5}
				marginTop={10}
			>
				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={300} />
					<CardContent>Shoping Cart</CardContent>
					<CardActions>Demo</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={300} />
					<CardContent>Shoping Cart</CardContent>
					<CardActions>Demo</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={300} />
					<CardContent>Shoping Cart</CardContent>
					<CardActions>Demo</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={300} />
					<CardContent>Shoping Cart</CardContent>
					<CardActions>Demo</CardActions>
				</Card>
			</Box>
		</MainPorto>
	);
};

export default Portofolio;
