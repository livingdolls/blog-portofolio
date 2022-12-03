import { Box, Button, Divider, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import facebook from "../assets/home.svg";
import MainButton from "../components/Button";

const MainHero = styled(Box)(({ theme }) => ({
	minHeight: "95vh",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	alignContent: "center",

	[theme.breakpoints.down("md")]: {
		marginTop: 50,
	},
}));

const BoxAbout = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		flex: "0 0 100%",
		order: 2,
	},

	padding: "25px",
}));

const BoxMedia = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flex: "0 0 10%",
		paddingLeft: "25px",
	},
}));

const BoxPhoto = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		flex: "0 0 90%",
	},
	[theme.breakpoints.up("md")]: {
		width: "35%",
	},
	padding: "25px",
}));

const BorderImg = styled(Button)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		borderBottom: `10px solid ${theme.palette.primary.main}`,
		borderLeft: "none",
	},
	[theme.breakpoints.down("lg")]: {
		borderLeft: "none",
	},
	borderLeft: `10px solid ${theme.palette.primary.main}`,
}));

const NamaTypo = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		fontSize: "40px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "65px",
		fontWeight: 600,
	},
}));

const Hero = () => {
	return (
		<MainHero>
			<BoxMedia sx={{ width: "10%" }}>
				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					gap={2}
					sx={{ height: "100%" }}
				>
					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>

					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>

					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>
				</Box>
			</BoxMedia>

			{/* About Me */}
			<BoxAbout sx={{ width: "55%" }}>
				<Box display={"flex"} flexDirection="column" gap={4}>
					<Box>
						<NamaTypo>Hi,</NamaTypo>
						<NamaTypo sx={{ display: "inline-block" }}>
							I'm Setiawan
						</NamaTypo>
						<NamaTypo
							sx={{
								display: "inline-block",
								ml: { sm: ".5rem" },
							}}
							color="primary"
						>
							Nanang
						</NamaTypo>
					</Box>

					<Divider textAlign="right" sx={{ width: "50%" }}>
						<Typography variant="h5">
							FULLSTACK WEB DEVELOPER
						</Typography>
					</Divider>

					<Typography variant="h6" fontWeight={400}>
						I'm from Semarang and i'm a fullstack web developer with
						a passion for solving problems and learning new things.
						I've been freelancing for the last 2 years, and right
						now i am looking forward to working with you!.
					</Typography>
					<MainButton>Contact Me</MainButton>
				</Box>
			</BoxAbout>

			{/* Photo */}
			<BoxPhoto>
				<Box display="flex" justifyContent={"center"}>
					<BorderImg>
						<img
							src={aimyon}
							alt={"photo"}
							height={400}
							width={300}
						/>
					</BorderImg>
				</Box>
			</BoxPhoto>
		</MainHero>
	);
};

export default Hero;
