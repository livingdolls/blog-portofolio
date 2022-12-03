import { Box, Button, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import MainButton from "../components/Button";

const BoxMain = styled(Box)(({ theme }) => ({
	height: "80vh",
	[theme.breakpoints.down("sm")]: {
		marginTop: "50px",
		minHeight: "90vh",
	},
}));

const SubBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexDirection: "row",
		padding: "100px",
		gap: 70,
	},

	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
	},
}));

const ImageBorder = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		width: "40%",
		marginTop: 0,
	},

	[theme.breakpoints.between("xs", "md")]: {
		display: "flex",
		justifyContent: "center",
		marginTop: 80,
	},
}));

const BoxInfo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.up("md")]: {
		justifyContent: "space-between",
		gap: 40,
	},

	[theme.breakpoints.between("xs", "md")]: {
		marginTop: 20,
		gap: 40,
		paddingLeft: 20,
		paddingRight: 20,
	},
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
				<ImageBorder>
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

				<BoxInfo>
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
					<Typography
						variant="body1"
						textAlign={"justify"}
						fontSize={20}
					>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
					</Typography>
					<MainButton>Download CV</MainButton>
				</BoxInfo>
			</SubBox>
		</BoxMain>
	);
};

export default About;
