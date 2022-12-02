import { Box, Button, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";

const BoxMain = styled(Box)(({ theme }) => ({
	height: "90vh",
	[theme.breakpoints.down("sm")]: {
		marginTop: "50px",
		// border: "1px solid red",
		minHeight: "90vh",
	},
}));

const SubBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		display: "flex",
		flexDirection: "row",
		padding: "100px",
		// border: "1px solid yellow",
		gap: 70,
	},

	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
		border: "1px solid black",

		// justifyContent: "center",
		// alignContent: "center",
		// padding: 0,
		// marginTop: "20px",
		// border: "1px solid yellow",
	},
}));

const ImageBorder = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		border: "1px solid cyan",
		width: "40%",
	},

	[theme.breakpoints.up("xs")]: {
		display: "flex",
		justifyContent: "center",
		marginTop: 80,
	},
}));

const ImageBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {},

	[theme.breakpoints.down("xs")]: {},
}));

const About = () => {
	return (
		<BoxMain>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				About Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Perkenalkan Diri Saya
			</Typography>

			<SubBox>
				<ImageBorder
					sx={
						{
							// width: { xs: "100%", lg: "40%" },
							// border: "1px solid green",
						}
					}
				>
					<Box
						component="img"
						alt="profil"
						src={aimyon}
						sx={{
							borderRadius: "30px",
							height: { xs: "300px", lg: "500px" },
							width: { xs: "300px", lg: "500px" },
						}}
					/>
				</ImageBorder>

				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"space-between"}
					sx={{
						width: { lg: "50%", xs: "100%" },
						padding: 5,
						border: "1px solid blue",
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							20+ Procject
						</Box>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							100+ Cup Coffe
						</Box>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							24/7 Learning
						</Box>
					</Box>
					<Typography variant="body1" textAlign={"justify"}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						sx={{ height: "70px", width: "200px" }}
					>
						Download CV
					</Button>
				</Box>
			</SubBox>
		</BoxMain>
	);
};

export default About;
