import { Box, Button, Divider, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import facebook from "../assets/home.svg";
import MainButton from "../components/Button";

const MainHero = styled(Box)(({ theme }) => ({
	height: "95vh",
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
					<NamaTypo>Setiawan Nanang</NamaTypo>

					<Divider textAlign="right" sx={{ width: "50%" }}>
						<Typography variant="h5">WEB DEVELOPER</Typography>
					</Divider>

					<Typography variant="h6" fontWeight={400}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
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
